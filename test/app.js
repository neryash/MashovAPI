const MashovAPI = require("../index.js");

(async function() {
  var semel = "";
  var allSchools = await MashovAPI.getSchools();
  for(var i = 0; i < allSchools.length; i++){
    if(allSchools[i].name == ""){
      semel = allSchools[i].semel;
    }
  }
  console.log(await MashovAPI.loginWithCreds({username:"328089131",password:"vp8816881688",year:2021,school:441196}));
  // await MashovAPI.getGrades()    V
  // await MashovAPI.getPhoto()     V
  // await MashovAPI.getSchools()   V
  // await MashovAPI.getBehave()    V
  // await MashovAPI.getOutBehave() V
  // await MashovAPI.getBirthday()  V
  // await MashovAPI.getHomework()  V
  //await MashovAPI.getCards()      V
  //await MashovAPI.getCardLinks()  V
  //await MashovAPI.getTimetable()  V
  //await MashovAPI.getMail()       V
  //await MashovAPI.getRecipients() V
  console.log(await MashovAPI.getRecipients());
  // let grades = await MashovAPI.getGrades();
  // let average = 0;
  // for(var i = 0; i < grades.length; i++){
  //   average+=grades[i].grade;
  // }
  // average = average/grades.length;
  // console.log("Your average is: " + average);
})()
