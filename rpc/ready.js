///////////////////////////////////

// Youtube:
//https://www.youtube.com/channel/UC4zkPH1ticImcO4-fjM2pZA

///////////////////////////////////

const rpc = require("discordrpcgenerator");




let NAME = "Name"
let DETAILS = "Details"
let STATE = "State"
let URL = ""
let APPID = ""
let LARGEIMG = "Id Img"
let LARGETEXT = "Large Text"
let SMALLIMG = "Id Img"
let SMALLTEXT = "Id Img"



module.exports = async (client) => {
  const small = await rpc.getRpcImage
  (APPID, SMALLIMG);//1°setApplicationId, 2°Name(Key)smallimage
  
  
rpc.getRpcImage
(APPID, LARGEIMG)//1°setApplicationId, 2°Name(Key)largename
.then(large => {
  
  
     let presence = new rpc.Rpc()
               
         .setName(NAME)
         .setDetails(DETAILS)
         .setState(STATE)
        
        
         .setUrl(URL)
         .setType("STREAMING")
         .setApplicationId(APPID)
        
         .setAssetsLargeImage(large.id)
         .setAssetsLargeText(LARGETEXT)
        
         .setAssetsSmallImage(small.id)
         .setAssetsSmallText(SMALLTEXT)
        

          
           client.user.setStatus("dnd");
      
     console.log(presence.toDiscord())
        
      
      client.user.setPresence(presence.toDiscord()).catch(console.error);
      
    })
      
console.log("Rpc ready")

}
