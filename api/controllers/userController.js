var dbConfig = require('../util/dbconfig')
function rand(min,max){
  return Math.floor(Math.random()*(max-min)) +min
}
validatePhoneCode = [];
let  sendCodeP = (phone) => {
  for(let item of validatePhoneCode){
    if(phone == item.phone){
      return true
    }
  }
  return false
}
let findCodeAndPhone = (phone,code)=>{
  for(var item of validatePhoneCode){
    if(phone==item.phone&&code==item.code){
      return 'login'
    }
  }
  return 'error'
}
//模拟验证码发送接口
sendCode=(req,res)=>{
  let phone =req.query.phone;
  //query带参 body不带参数
  if(sendCodeP(phone)){
    res.send({
      'code':400,
      'msg':'已经发送过验证码,稍后再发'
    })
  }
  let code = rand(1000,9999);
  validatePhoneCode.push({
    'phone':phone,
    'code':code
  })
  console.log(validatePhoneCode)
    res.send({
      'code':200,
      'msg':'发送成功'
    })
    console.log(code)
}
//验证码登入
codePhoneLogin = (req,res)=>{
  let {phone,code} = req.query;
  //该手机是否发送过验证码
  if(sendCodeP(phone)){
    //验证码和手机号是否匹配
    let status = findCodeAndPhone(phone,code);
    if(status == 'login'){
      //登入成功
      //登录成功之后的操作
      res.send({
        'code':200,
        'msg':'登入成功'
      })
    }else if(status=='error'){
      res.send({
        'code':200,
        'msg':'登入失败'
      })
    }
    }else{
      res.send({
        'code':400,
        'msg':'未发送验证码'
      })
  }
}
module.exports = {
  sendCode,
  codePhoneLogin
}