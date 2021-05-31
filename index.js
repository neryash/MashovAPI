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
            resolve("done")
          }else{
            console.log(response.statusCode);
            reject("failed " + response.statusCode)
          }
        }
      )
  })
}

module.exports.loginWithCreds = loginWithCreds;
