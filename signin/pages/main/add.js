// pages/main/add.js
import "../../app.js"
const app = getApp();
Page({
  data: {
    title: "",
    content: ""
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  titleCommit: function (e) {
    console.log(e.detail);
    this.setData({
      title: e.detail.value
    })
  },
  commit: function (e) {
    this.setData({
      content: e.detail.value
    })
    AV = app.AV;
    var Todo = AV.Object.extend('Todo');
    // 新建一个 Todo 对象
    var todo = new Todo();
    todo.set('title', '工程师周会');
    todo.set('content', '每周工程师会议，周一下午2点');
    todo.save().then(function (todo) {
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + todo.id);
    }, function (error) {
      // 异常处理
      console.error('Failed to create new object, with error message: ' + error.message);
    });

    var essay = AV.Object.extend("essay");
    essay.set("title", data.title);
    essay.set("content", data.content);
    essay.save().then(function (todu) {
      console.log("保存成功");
    }, function (error) {
      console.log("保存失败");
    })
  }
})