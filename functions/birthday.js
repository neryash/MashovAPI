const request = require("request");

async function getBirthday(options) {
  return new Promise(async (resolve, reject) => {
    request.get("https://web.mashov.info/api/user/"+options.userId+"/birthday",
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

module.exports.getBirthday = getBirthday;
