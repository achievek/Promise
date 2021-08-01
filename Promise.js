/* 
  自定义 Promise函数模块：IIFE
*/

(function(window){
  //Promise传入一个exexutor执行器函数
  function Promise(exexutor){

  }
  /*
   Promise 原型对象上有then()，catch()
  */
  //传入成功，失败的回调函数 并返回一个新的Promise 对象
  Promise.prototype.then =function(onResolved,onRejected){

  }
  //传入失败的回调函数 并返回一个新的Promise对象
  Promise.prototype.catch =function(onResolved,onRejected){

  }
  /*
  Promise 函数对象有resolve，reject,all,race方法
  */
  //返回一个成功的Promise 且成功值为value
  Promise.resolve =function(value){

  }
  //返回一个失败的Promise 且失败原因为reason
  Promise.reject =function(reason){
    
  }
  //传入一个Promise数组，只有当所有Promise 都成功时才成功，只要有一个失败就失败
  Promise.all =function(promiseArr){
    
  }
  //传入一个Promise对象，其结果由第一个完成的Promise决定
  Promise.race =function(promiseArr){
    
  }
  //向外暴露Promise
  window.Promise =Promise
})(window)