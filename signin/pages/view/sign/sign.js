// pages/view/sign/sign.js
var app = getApp()
const AV = require("../../../utils/lib/av-weapp-min.js")
Page({
  data:{
    config:{
      title:"题目",
      desc:"内容地址",
      btn:"签到"
    }
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
      href:e.detail.value
    })
  },
  sign:function(){
    var essay = AV.Object.extend("essay")
    essay.set("title",this.data["title"])
    essay.set("title",this.data["href"])
    essay.set("uid","")
    essay.set("gid","")
    essay.save().then(function(todo){
        console.log("保存成功");
        alert("签到成功")
    },function (error) {
    // 异常处理
        alert("签到失败")
    })
  }
})