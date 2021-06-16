const MashovAPI = require("../index.js");

(async function() {
  var semel = "";
  var allSchools = await MashovAPI.getSchools();
  for(var i = 0; i < allSchools.length; i++){
    if(allSchools[i].name == ""){
      semel = allSchools[i].semel;
    }
  }
  console.log(await MashovAPI.loginWithCreds({username:"",password:"",year:2021,school:441196}));
  console.log(await MashovAPI.getRecipients());
})()
