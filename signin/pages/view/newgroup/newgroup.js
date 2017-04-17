// pages/view/newgroup/newgroup.js
const AV = require("../../../utils/lib/av-weapp-min.js")
Page({
  data:{
    config:{
      title:"签到组名称",
      desc:"签到组描述",
      btn:"确认创建"
    },
    title:"",
    gdesc:"",
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  titleInput:function(e){
    this.setData({
      title:e.detail.value
    })
  },
  hrefInput:function(e){
    this.setData({
      gdesc:e.detail.value
    })
  },
  submit:function(){
    var group = AV.Object.extend("group")
    group.set("gName",this.data[title]);
    group.set("gDesc",this.data[gdesc]);
    group.save().Then(function(success){
      alert("保存成功"+success);
    },function(error){
      alert(error);
    })
  }
})