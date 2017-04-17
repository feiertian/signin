// pages/view/group/groupDetail.js
Page({
  data:{
    gid:"",
    groupName:"反思第一组",
    signInMembers:[{url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2671053483,303258384&fm=23&gp=0.jpg",name:"王新华",title:"4月15日《反思》文章"},],
    unSignInMembers:[{url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2671053483,303258384&fm=23&gp=0.jpg",name:"王新华",title:"4月15日《反思》文章"},]
  },
  onLoad:function(options){
    this.setData({
      gid:options.gid
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
  }
})