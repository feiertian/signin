// pages/view/homepage/homePage.js
var app = getApp()
const AV = require("../../../utils/lib/av-weapp-min.js")
Page({
  data:{
    title:"签到首页",
    motto:"你是不是傻",
    groups:[
    ],
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      
      var group = {}
      group.url = userInfo.avatarUrl
      group.name = "通往财富自由之路"
      group.signNum = "30"
      group.likeNum = "2"
      userInfo.signNum = "20"
      that.setData({
        groups:[group,]
      })
    })
  },
  itemClick:function(e){
    // var gid = this.data.groups[e.detail.idx].gid
    var gid = e.currentTarget.dataset.idx;
    wx.navigateTo({
      url: '../group/groupDetail?gid=' + gid,
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
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
  }
})