const request = require("request");

async function getSchools() {
  return new Promise(async (resolve, reject) => {
    request.get("https://web.mashov.info/api/schools",
      {
        headers:{
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

module.exports.getSchools = getSchools;
