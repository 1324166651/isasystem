var dbConfig = require('../util/dbconfigs')
//获取分类
getidiom=(req,res)=>{
  var sql = "select * from idiom  order by type";
  var sqlArr = [];
  var callBack = (err,data) => {
    if(err){
      console.log('连接出错了')
    }else{
      res.send({
        'list': data,
      })
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
}
getidiomtype=(req,res)=>{
  let {type,page} =req.params
  let newArry=[]
  switch(type){
    case "idioms1":
      type = 1;
      break;
    case "idioms2":
      type = 2;
      break;
    case "idioms3":
    type = 3;
    break;
  }

  page=parseInt(page)
  // let {limit} =req.params.limit
  var sql = 'select * from idiom where type =? ';
  var sqlArr = [type];
  console.log(sqlArr)
  var callBack = (err,data) => {
    if(err){
      console.log('连接出错了')
    }else{
      newArry=data.slice((page-1)*3,3+(page-1)*3)
      res.send({
        'list': newArry,
      })
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
}
getdetail=(req,res)=>{
  let {id} =req.query;
  var sql = "select * from idiom  where Id=?";
  var sqlArr = [id];
  var callBack = (err,data) => {
    if(err){
      console.log('连接出错了')
    }else{
      res.send({
        'list': data,
      })
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
}
getsearch=(req,res)=>{
  let {name} =req.query;
  name="%"+name+"%"
  console.log(name)
  var sql = "select id,name from idiom  where name like ? limit 10";
  var sqlArr = [name];
  var callBack = (err,data) => {
    if(err){
      console.log('连接出错了')
    }else{
      res.send({
        'list': data,
      })
    }
  }

  dbConfig.sqlConnect(sql,sqlArr,callBack)
}
getanswer=(req,res)=>{
  var sql = "select * from answer ";
  var sqlArr = [];
  var callBack = (err,data) => {
    if(err){
      console.log('连接出错了')
    }else{
      res.send({
        'list': data,
      })
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack)
}
module.exports = {
  getidiom,
  getidiomtype,
  getdetail,
  getsearch,
  getanswer
}