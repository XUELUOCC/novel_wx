// pages/bookDetail/bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgFlag:false,
    flodFlag:false,
    //书籍详情
    bookDetailData:{
      bookImg:'../../image/bookDetail/tip.png',
      bookName:'逐鹿双姝',
      author:'空山吟',
      bookType:'科幻',
      bookLink:'组团领取畅读卡，小程序全场免费>',
      bookWord:'94',
      bookStatus:'连载',
      bookGrade:'0',
      bookGradePeople:'0',
      bookIntroduct:'张晓，原来是一个初入社会的大学生，在去面试的路上过马路时被一辆闯红灯的轿车给撞死，'+
      '灵魂穿越回了公元180年的幽州蓟县，成为了一个中等士族当代族长的长子，名叫张皓，字明德。'+
      '为了在日后的乱世中生存下去，不断地发展自己的实力。“汉失其鹿，天下共逐”。',
      bookUpdateTime:'2020-12-23 12:00',
      bookUpdateChapter:'第321章 封帝',
      bookRole:[
        {
          roleName:'角色1',
          roleType:'男主'
        },
        {
          roleName:'角色2',
          roleType:'女主'
        }
      ]
    },
    //评论详情
    commentDetail:[
      {
        user:'用户1',
        userImg:'../../image/bookDetail/profile.png',
        content:'时代的挣扎与柔情，有柔情有热血，有所为有所不为，终究意难平。值得去体验更好的历史好文'
      },
      {
        user:'用户1',
        userImg:'../../image/bookDetail/profile.png',
        content:'时代的挣扎与柔情，有柔情有热血，有所为有所不为，终究意难平。值得去体验更好的历史好文'
      },
      {
        user:'用户1',
        userImg:'../../image/bookDetail/profile.png',
        content:'时代的挣扎与柔情，有柔情有热血，有所为有所不为，终究意难平。值得去体验更好的历史好文'
      },
    ],
    bookContent:{
      title:'第一章',
      chapterName:'楔子',
      content:''
    }
  },

  /**折叠侧边栏 */
  foldCatalog(e){
    this.setData({
      flodFlag:!this.data.flodFlag
    })
    this.setData({
      bgFlag:!this.data.bgFlag
    })
    wx.setNavigationBarTitle({
      title:'赘婿'
    })
  },
  packBg(e){
    this.setData({
      flodFlag:false
    })
    this.setData({
      bgFlag:false
    })
    wx.setNavigationBarTitle({
      title:''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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