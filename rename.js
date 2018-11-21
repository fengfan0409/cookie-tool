const fs=require('fs')
fs.readdir('cookietxt',function (err,files) {
  if (err){
    throw err
  }
  for (let i=0;i<files.length;i++){
    fs.rename('cookietxt/'+files[i],'cookietxt/request'+i+'.txt',function (err) {
      if (err){throw err}
    })
  }
})
