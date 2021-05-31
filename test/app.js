const MashovAPI = require("../index.js");

(async function() {
  console.log(await MashovAPI.loginWithCreds({username:"328089131",password:"vp8816881688"}));
  console.log(await MashovAPI.getGrades());
})()
