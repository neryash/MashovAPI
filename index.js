//require stuff
const request = require("request");
const grades = require("./functions/grades.js")
const photo = require("./functions/photo.js")
const schools = require("./functions/schools.js")
const behave = require("./functions/behave.js")
const outBehave = require("./functions/outBehave.js")
const birthday = require("./functions/birthday.js")

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

//login and get creds
async function loginWithCreds(options){
  return new Promise(async (resolve, reject) => {
    request.post("https://web.mashov.info/api/login",
      {json:{"semel":441196,"year":2021,"username":options.username,"password":options.password,"appName":"info.mashov.students","apiVersion":"3.20210425","appVersion":"3.20210425","appBuild":"3.20210425",
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
