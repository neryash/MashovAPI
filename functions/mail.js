const request = require("request");

async function getMail(options) {
  return new Promise(async (resolve, reject) => {
    request.get("https://web.mashov.info/api/mail/inbox/conversations?skip=0&take=20",
      {
        headers:{
          "X-Csrf-Token":options.csrf,
          Cookie:options.cookies,
          Host:"web.mashov.info"
        }
      },
      function(error, res,body) {
        if(!error && res.statusCode == 200){
          resolve(JSON.parse(body))
        }else{
          console.log("fail");
          console.log(res.statusCode);
          resolve("failed " + res.statusCode)
        }
      }
    );
  })
}

async function sendMail(options,mailOptions){
  return new Promise(async (resolve, reject) => {
    request.get("https://web.mashov.info/api/mail/inbox/conversations?skip=0&take=20",
      {
        headers:{
          "X-Csrf-Token":options.csrf,
          Cookie:options.cookies,
          Host:"web.mashov.info"
        }
      },
      function(error, res,body) {
        if(!error && res.statusCode == 200){
          resolve(JSON.parse(body))
        }else{
          console.log("fail");
          console.log(res.statusCode);
          resolve("failed " + res.statusCode)
        }
      }
    );
  })
}


module.exports.getMail = getMail;
module.exports.sendMail = sendMail;
