const  baseURL='http://localhost:3000/'
export const getrequest = (options) =>{
return new Promise((resolve, reject) => {
uni.request({
   url: baseURL+options.url,
   data: options.data||{},
   success: (res) => {
      resolve(res);
   },
	 fail: (err) => {
   reject(err)
 }
})
})
}
