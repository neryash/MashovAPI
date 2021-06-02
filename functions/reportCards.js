const request = require("request");

var cards;

async function getCards(options) {
  return new Promise(async (resolve, reject) => {
    request.get("https://web.mashov.info/api/students/"+options.userId+"/reportCards",
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

async function getCardLinks(options) {
  return new Promise(async (resolve, reject) => {
    cards = await getCards(options);
    var urls = []
    for(var i = 0; i < cards.length; i++){
      urls.push("https://web.mashov.info/api/students/" + options.userId + "/reportCards/" + cards[i].fileId + "/" + cards[i].labelName + ".pdf")
    }
    resolve(urls)
  })

}

module.exports.getCards = getCards;
module.exports.getCardLinks = getCardLinks;
