//app.js
//1.小程序不是运行在浏览器中,所以没有DOM与BOM对象

//2.小程序的JS有一些额外的成员
//APP 方法 用于定义应用程序实例对象
//Page 方法 用于定义页面对象
//getApp 方法 用来获取全局应用程序对象
//getCurrentPages 方法 用来获取当前页面的调用栈(数组,最后一个就是当前页面)

//wx 对象 用来提供核心API的

//3.小程序的JS是支持CommonJS规范的


App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})