Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = [
      { "name": "第一行"},
      { "name": "第二行"},
      { "name": "第三行" },
      { "name": "第四行" }
    ];

    this.setData({
      dataArr: arr
    })
  },

  // 点击事件
  onJumpTap: function (event) {
    let name = event.currentTarget.dataset.apiid;
    console.log(name);
  }
})