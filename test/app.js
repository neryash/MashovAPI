const MashovAPI = require("../index.js");

(async function() {
  var semel = "";
  var allSchools = await MashovAPI.getSchools();
  for(var i = 0; i < allSchools.length; i++){
    if(allSchools[i].name == ""){
      semel = allSchools[i].semel;
    }
  }
  console.log(await MashovAPI.loginWithCreds({username:"",password:"",year:2021,school:semel}));
  // await MashovAPI.getGrades()
  // await MashovAPI.getPhoto()
  // await MashovAPI.getGrades()
  // await MashovAPI.getSchools()
  // await MashovAPI.getBehave()
  // await MashovAPI.getOutBehave()
  // await MashovAPI.getBirthday()
  // await MashovAPI.getBirthday()
  // await MashovAPI.getHomework()
  //await MashovAPI.getCards()
  //await MashovAPI.getCardLinks()
  //await MashovAPI.getTimetable()
  //await MashovAPI.getMail()
  //await MashovAPI.getRecipients()
  console.log(await MashovAPI.getPhoto());
})()
