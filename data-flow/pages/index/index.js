//index.js
//获取应用实例
Page({
  data:{
    message:'initial'
  },
  inputHandler:function(e){
    //this.data.message = e.detail.value;
    //console.log(this.data.message);
    this.setData({message:e.detail.value});
  }

  //this.setData 是用来改变data中的数据
  //它与直接赋值区别在于setData可以通知界面做出变化
  //直接赋值没有办法实现这一点(早期的JS)
})
