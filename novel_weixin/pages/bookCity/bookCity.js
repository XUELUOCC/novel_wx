// pages/bookDetail/bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    activeTab: 0,
    currentIndex:1,  //tabs中的swiper的index
    imgIndex:1,
    swiperList:[
      {
        name:'大奉打更人',
        author:'卖报小郎君'
      },
      {
        name:'万族之劫',
        author:'老鹰吃小鸡'
      },
      {
        name:'赘婿',
        author:'愤怒的香蕉'
      },
    ],
    swiperimg:[
      {
        images:"../../image/bookCity1.jpg"
      },
      {
        images:"../../image/bookCity2.jpg"
      },
      {
        images:"../../image/bookCity3.jpeg"
      }
    ]
  },
  onTabClick(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },
  handleClick(e) {
    wx.navigateTo({
      url: './webview',
    })
  },
  //
  bindChange(e){
    // console.log('aaaa')
    // console.log(e.detail.current)
    this.setData({
      currentIndex:e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const tabs = [
      {
        title: '男生',
        title2: '男生小说',
        img: '',
        desc: '',
      },
      {
        title: '女生',
        title2: '女生小说',
        img: '',
        desc: '',
      },
    ]
    this.setData({ tabs })
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
    // return {
    //   title: 'tabs',
    //   path: 'page/weui/example/tabs/tabs'
    // }
  }
})