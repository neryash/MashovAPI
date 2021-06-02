const MashovAPI = require("../index.js");

(async function() {
  console.log(await MashovAPI.loginWithCreds({username:"328089131",password:"vp8816881688"}));
  await MashovAPI.getGrades()
  await MashovAPI.getPhoto()
  await MashovAPI.getGrades()
  await MashovAPI.getSchools()
  await MashovAPI.getBehave()
  await MashovAPI.getOutBehave()
  await MashovAPI.getBirthday()
  console.log(
  await MashovAPI.getBirthday());
})()
