async function getPhoto(userId) {
  return new Promise(async (resolve, reject) => {
    resolve("https://web.mashov.info/api/user/"+userId+"/picture")
  })
}


module.exports.getPhoto = getPhoto;
