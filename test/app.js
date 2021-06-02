const MashovAPI = require("../index.js");

(async function() {
  console.log(await MashovAPI.loginWithCreds({username:"328089131",password:"vp8816881688"}));
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
  console.log(await MashovAPI.getMail());
})()
