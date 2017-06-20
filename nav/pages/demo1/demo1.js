// pages/demo1/demo1.js
Page({
  tapFunction:function(){
    // 跳转到demo2页面
    // wx.navigateTo({
    //   url: '../demo2/demo2',
    // });

    // 相当于navigator加上redirect
    wx.redirectTo({
      url: '../demo2/demo2',
    });
  }
})