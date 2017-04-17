// pages/view/me/me.js
var app = getApp()
Page({
  data:{
    userInfo:{},
    groupId:"反思签到组",
    recordCount:15
    
  },
  onLoad:function(options){
    var that = this
    app.getUserInfo(function(userinfo){
      that.setData({
        userInfo:userinfo
      })
    })
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
  recordTap:function(){
    
  },
  groupTap:function(){
    
  }
})