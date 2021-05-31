const request = require("request");

async function getGrades(options) {
  return new Promise(async (resolve, reject) => {
    request.get("https://web.mashov.info/api/students/"+options.userId+"/grades",
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

module.exports.getGrades = getGrades;
