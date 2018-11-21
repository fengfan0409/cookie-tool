const fs=require('fs');


// 将这个函数复制到fiddler下面
/*
~function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}()

function setCookies(cooData,expireHours){
  const date=new Date();
  date.setHours(date.getHours()+expireHours);
  const cooArray=cooData.split(',')
  for (let i=0;i<cooArray.length;i++){
    const singleData=cooArray[i].trim();
    document.cookie=singleData+';expire='+date.toUTCString()
  }
}

deleteAllCookies();
setCookies(cooData,168)
*/
fs.readdir('cookietxt',function (err,files) {
  if (err){
    throw err
  }
  for (let i=0;i<files.length;i++){
    fs.readFile('cookietxt/'+files[i],function (err,data) {
      if (err){
        throw err
      }
      //txt=>cookie
      const txtData=data.toString();
      const txtArr=txtData.split('Cookie:')
      const cookieAll=txtArr[txtArr.length-1]
      const cookieArray=cookieAll.split(';')
      //txt=>url
      const urlArr=txtData.slice(txtData.indexOf('http://'),txtData.indexOf('HTTP'))
      //all=>txt
      fs.writeFile('cookiedata/cookie'+i+'.txt','url='+urlArr+';cookieArray=['+cookieArray+']',function (err) {
        if (err){
          throw err
        }
        console.log('写入成功')
      })
    })
  }
});
