const db = require("../models");

class handleQuery {
   filter(req) {
      try{
        // hotel
        const upperPrice = req.query.upperPrice;
        const lowerPrice = req.query.lowerPrice;
        const FreeWifi= req.query.FreeWifi;
        const SuitableForChildren= req.query.SuitableForChildren;
        const Bathtub= req.query.Bathtub;
        const Buffet= req.query.Buffet;
        const PetFriendly= req.query.PetFriendly;
        const NonSmokingRoom= req.query.NonSmokingRoom;
        const Pool= req.query.Pool;
        const LaundryService= req.query.LaundryService;
        const CarPark= req.query.CarPark;
        const FacilitiesForDisabledPeople= req.query.FacilitiesForDisabledPeople;

        // room
        const numberOfAdult = req.query.numberOfAdult;
        const checkInDate = req.query.checkInDate;
        const roomQuery ={
            numberOfAdult,
            checkInDate,
        }
         
        if (!numberOfAdult){
            delete roomQuery.numberOfAdult;
        }
        if (!checkInDate){
            delete roomQuery.checkInDate;
        }
        
        



        const query = {
            FreeWifi:true,
            SuitableForChildren: true,
            Bathtub: true,
            Buffet: true,
            PetFriendly: true,
            NonSmokingRoom: true,
            Pool: true,
            LaundryService: false,
            CarPark: true,
            FacilitiesForDisabledPeople: true,
            'price.value': {
                $lte: upperPrice,
                $gte: lowerPrice,
            },
        }
        if (!FreeWifi){
            delete query.FreeWifi;
        }
        if (!SuitableForChildren){
            delete query.SuitableForChildren;
        }
        if (!Bathtub){
            delete query.Bathtub;
        }
        if (!Buffet){
            delete query.Buffet;
        }
        if (!PetFriendly){
            delete query.PetFriendly;
        }
        if (!NonSmokingRoom){
            delete query.NonSmokingRoom;
        }
        if (!Pool){
            delete query.Pool;
        }
        if (!LaundryService){
            delete query.LaundryService;
        }
        if (!CarPark){
            delete query.CarPark;
        }
        if (!FacilitiesForDisabledPeople){
            delete query.FacilitiesForDisabledPeople;
        }
        if (!upperPrice && !lowerPrice){
            delete query.price;
        }
        return {
            query,
            roomQuery,
        } 
      } catch (e){
          console.log(e);
      }

  }
    
}
module.exports = new handleQuery();
