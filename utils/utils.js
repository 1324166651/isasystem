export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }
  return fmt;
}
export function bartimeFormatter(value) {
        var datetime = new Date(parseInt(value.replace("/Date(", "").replace(")/", "").split("+")[0]))        
        var year = datetime.getFullYear(); 
        var month = datetime.getMonth()+1;//js从0开始取 
        var date = datetime.getDate(); 
        var hour = datetime.getHours(); 
        var minutes = datetime.getMinutes(); 
        var second = datetime.getSeconds();
 
        if(month<10){
            month = "0" + month;
        }
        if(date<10){
            date = "0" + date;
        }
        if(hour <10){
            hour = "0" + hour;
        }
        if(minutes <10){
            minutes = "0" + minutes;
        }
        if(second <10){
            second = "0" + second ;
        }
 
        var time = year+"-"+month+"-"+date+" "+hour+":"+minutes+":"+second; //2009-06-12 17:18:05
        // alert(time);
        return time;

    }
export function renderTime(date) {
  var dates = new Date(date).toJSON();
  return new Date(+new Date(dates) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
}
