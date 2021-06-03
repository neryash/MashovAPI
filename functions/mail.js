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

async function getRecipients(options) {
  return new Promise(async (resolve, reject) => {
    request.get("https://web.mashov.info/api/mail/recipients",
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

function getMailTime() {
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  return year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds;
}

async function getMessageId(options) {
  return new Promise(async (resolve, reject) => {
    request.get("https://web.mashov.info/api/mail/messages",
      {
        headers:{
          "X-Csrf-Token":options.csrf,
          Cookie:options.cookies,
          Host:"web.mashov.info"
        }
      },
      function(error, res,body) {
        if(!error && res.statusCode == 200){
          resolve(body)
        }else{
          console.log("fail");
          console.log(res.statusCode);
          resolve("failed " + res.statusCode)
        }
      }
    );
  })
}

function sendMail(options,mailOptions){
  var messageBody = {
    messageId: mailOptions.msgId,
    conversationId: mailOptions.msgId,
    senderId:options.userId,
    subject:mailOptions.subject,
    body:mailOptions.msgBody,
    lastUpdate: getMailTime(),
    recipients:mailOptions.recipients, //Array of recipients, {displayOrder:index,value:userId,valueType: "User",targetType:"user",displayName: username}
    cc:mailOptions.cc,
    bcc:mailOptions.bcc,
    folder:0,
    isNew:false,
    isDeleted:false,
    files:[], //Future feature
    lables:[],
    sendOnBehalf:false,
    sendViaEmail:false,
    preventReply:false,
    sentViaEmail:false,
    sentViaSms:false,
    lastSaved:getMailTime()
  }
  request.post("https://web.mashov.info/api/mail/messages/"+mailOptions.msgId,
    {
      headers:{
        "X-Csrf-Token":options.csrf,
        Cookie:options.cookies,
        Host:"web.mashov.info"
      },
      json:{messageBody}
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
}

module.exports.getMail = getMail;
module.exports.sendMail = sendMail;
module.exports.getRecipients = getRecipients;
module.exports.getMessageId = getMessageId;
