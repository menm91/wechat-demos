//index.js
//获取应用实例
Page({
  data:{
    name:'WeChat'
  },
  buttonTapHandler:function(e){
    console.log("点击.");
    console.dir(e);
  },
  innerHandler:function(){
    console.log("inner");
    return false;
  },
  outerHandler:function(){
    console.log("outer");
    return false;
  },
  tap2Handler: function(e){
    //e.target 得到的就是点击的元素
    //dataset 指的是元素上所有以data-开头的属性
    console.log(e.target.dataset);
  }
})