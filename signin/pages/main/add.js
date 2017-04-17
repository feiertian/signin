// pages/main/add.js
const AV = require('../../utils/lib/av-weapp-min.js');
Page({
  data: {
    title: "",
    content: ""
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