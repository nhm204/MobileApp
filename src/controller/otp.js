
const {google} = require("googleapis")

class Otp {
    async handleSendOtp(req, res) {
      try {
        const recaptchaToken = req.body.recaptcha;
        const phoneNumber = "+" + req.body.phone;
        phoneNumber.trim();
  
        if (!recaptchaToken && !phoneNumber) {
          return res.status(400).send({message:"Something when wrong!"});
        }
        var identityToolkit = google.identitytoolkit({
            auth: process.env.FIREBASE_API_KEY,
            version: "v3"
        });
  
        const response = await identityToolkit.relyingparty.sendVerificationCode({
          requestBody: {
            phoneNumber: `${phoneNumber}`,
            recaptchaToken: `${recaptchaToken}`,
          },
        });
  
        return res.send(response.data);
      } catch (err) {
        return res.status(400).send(err.errors);
      }
    }
  
    async verifyOtp(req, res) {
      try {
        const {sessionInfo, code} = req.body;
        if (!sessionInfo || !code) {
          return res.status(400).send({message:"Missing session code or code"});
        }
  
        const identityToolkit = google.identitytoolkit({
          auth: process.env.FIREBASE_API_KEY,
          version: "v3",
        });
  
        await identityToolkit.relyingparty.verifyPhoneNumber({
          requestBody: {
            code: `${code}`,
            sessionInfo: `${sessionInfo}`,
          },
        });
  
        return res.send({message:"Verify successfully!"})
      } catch (err) {
        return res.status(400).send({message:"Verify failed"});
      }
    }
  }
  module.exports = new Otp();
  