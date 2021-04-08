// pages/chapterContent/chapterContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flodFlag:false,
  },
  //阅读上一章
  readPrevious(e){},
  //阅读目录
  readCatalog(e){
    console.log('sss')
    this.setData({
      flodFlag:!this.data.flodFlag
    })
  },
  //阅读下一章
  readNext(e){},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('aaaa')
    wx.setNavigationBarTitle({ title:'逐鹿双姝'})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})