// pages/demo3/demo3.js
Page({
  backHandler: function(){
    //默认返回上一页
    // wx.navigateBack();
    // 指定delta，后退的步数
    // delta 指定过大,返回最开始的页面
    wx.navigateBack({
      delta: 100
    });
  }
})