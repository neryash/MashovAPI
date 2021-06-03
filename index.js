//require stuff
const request = require("request");
const grades = require("./functions/grades.js")
const photo = require("./functions/photo.js")
const schools = require("./functions/schools.js")
const behave = require("./functions/behave.js")
const outBehave = require("./functions/outBehave.js")
const birthday = require("./functions/birthday.js")
const homework = require("./functions/homework.js")
const cards = require("./functions/reportCards.js")
const timetable = require("./functions/timetable.js")
const mail = require("./functions/mail.js")

//variable declaration
var XCsrfToken = "";
var UID = "";
var sessCookie = "";

var userOptions = {userId:UID,csrf:XCsrfToken,cookies:sessCookie};

//Function to get session cookies
function getSession() {
  return sessCookie;
}

//Getting grades
async function getGrades(){
  return await grades.getGrades(userOptions)
}

//Getting Photo
async function getPhoto() {
  return await photo.getPhoto(UID);
}
//Getting Photo
async function getSchools() {
  return await schools.getSchools();
}
//Getting Behavior
async function getBehave() {
  return await behave.getBehave(userOptions);
}
//Getting Out Behavior
async function getOutBehave() {
  return await outBehave.getOutBehave(userOptions);
}
//Getting birthday
async function getBirthday() {
  return await birthday.getBirthday(userOptions);
}
//Getting homework
async function getHomework() {
  return await homework.getHomework(userOptions);
}
//Getting Report Cards
async function getCards() {
  return await cards.getCards(userOptions);
}
//Getting Report Cards
async function getCardLinks() {
  return await cards.getCardLinks(userOptions);
}
//Getting Timetables
async function getTimetable() {
  return await timetable.getTimetable(userOptions);
}
//Getting Timetables
async function getMail() {
  return await mail.getMail(userOptions);
}
//Getting Timetables
async function getRecipients() {
  return await mail.getRecipients(userOptions);
}
//Getting Timetables
async function getMessageId() {
  return await mail.getMessageId(userOptions);
}
//https://web.mashov.info/api/students/5896c353-386f-44ce-9e4e-15f3c3d9c740/reportCards/edbbbb4b-bb8a-49d6-a326-18df52d25a41/%D7%9E%D7%97%D7%A6%D7%99%D7%AA%20%D7%90%20%D7%AA%D7%A9%D7%A4%22%D7%90.pdf

//login and get creds
async function loginWithCreds(options){
  return new Promise(async (resolve, reject) => {
    request.post("https://web.mashov.info/api/login",
      {json:{"semel":options.school,"year":options.year,"username":options.username,"password":options.password,"appName":"info.mashov.students","apiVersion":"3.20210425","appVersion":"3.20210425","appBuild":"3.20210425",
      "deviceUuid":"chrome","devicePlatform":"chrome","deviceManufacturer":"win","deviceModel":"desktop","deviceVersion":"91.0.4472.77"}},
        function(error,response,body) {
          if(!error && response.statusCode == 200){
            // console.log(response.headers);
            XCsrfToken = response.headers["x-csrf-token"];
            UID = body.credential.userId;
            let uniquId = "", mat = "";
            sessCookies = response.headers["set-cookie"];
            for(var i = 0; i < sessCookies.length; i++){
              sessCookie+=sessCookies[i];
              if(sessCookies[i].includes("uniquId=")){
                uniquId = sessCookies[i].substring(sessCookies[i].indexOf("uniquId=")+"uniquId=".length,sessCookies[i].indexOf(";"));
              }
              if(sessCookies[i].includes("MashovAuthToken=")){
                mat = sessCookies[i].substring(sessCookies[i].indexOf("MashovAuthToken=")+"MashovAuthToken=".length,sessCookies[i].indexOf(";"));
              }
            }
            sessCookie = `Csrf-Token=${XCsrfToken};MashovAuthToken=${mat};uniquId=${uniquId}`
            console.log(sessCookie);
            userOptions = {userId:UID,csrf:XCsrfToken,cookies:sessCookie};
            resolve({uid:UID,sessCookie:sessCookie,XCsrfToken:XCsrfToken})
          }else{
            console.log(response.statusCode);
            reject("failed " + response.statusCode)
          }
        }
      )
  })
}


//send to exports
module.exports.loginWithCreds = loginWithCreds;
module.exports.getSession = getSession;
module.exports.getGrades = getGrades;
module.exports.getPhoto = getPhoto;
module.exports.getSchools = getSchools;
module.exports.getBehave = getBehave;
module.exports.getOutBehave = getOutBehave;
module.exports.getBirthday = getBirthday;
module.exports.getHomework = getHomework;
module.exports.getCards = getCards;
module.exports.getCardLinks = getCardLinks;
module.exports.getTimetable = getTimetable;
module.exports.getMail = getMail;
module.exports.getRecipients = getRecipients;
module.exports.getMessageId = getMessageId;
