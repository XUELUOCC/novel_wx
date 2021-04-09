// pages/bookDetail/bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgFlag:false,
    flodFlag:false,
    introductFlag:false,
    foldText:'展开',  //控制简介中展开和收起的出现与否
    textEtc:"...", //控制简介中省略号的出现与否
    //书籍详情
    bookDetailData:{
      id:'11',
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
      '灵魂穿越回了公元180年的幽州蓟县，成为了一个中等士族当代族长的长子，名叫张皓，字明德。 为了在日后的乱世'+
      '中生存下去，不断地发展自己的实力。 “汉失其鹿，天下共逐”。',
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
    //章节详情
    bookContent:{
      id:"11-11",
      title:'第一章',
      chapterName:'楔子',
      content:''
    }
  },

  /**折叠侧边栏 */
  foldCatalog(e){
    this.setData({
      flodFlag:true
    })
    this.setData({
      bgFlag:true
    })
  },
  //阅读下一章
  readChapter(e){
    let bookId=this.data.bookDetailData.id;
    let chapterId=this.data.bookContent.id;
    wx.navigateTo({
      url:'/pages/chapterContent/chapterContent?bookId='+bookId+'&&chapterId='+chapterId
    })
  },
  //立即阅读
  read(e){
    let bookId=this.data.bookDetailData.id;
    let chapterId=this.data.bookContent.id;
    wx.navigateTo({
      url:'/pages/chapterContent/chapterContent?bookId='+bookId+'&&chapterId='+chapterId
    })
  },
  //简介的展开
  async fold(e){
    await this.setData({
      introductFlag:!this.data.introductFlag,
    })
    this.setData({
      foldText:this.data.introductFlag==true? '收起':'展开',
      textEtc:this.data.introductFlag==true? ' ':'...'
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
    let that=this;
    wx.createSelectorQuery().select('.text').boundingClientRect(function (rect) {
      console.log(rect);
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
      console.log(rect.height)
      console.log(that.data.flodFlag)
      if(parseInt(rect.height)<93 ){
        that.setData({
          foldText:'',
          textEtc:''
        })
      }
    }).exec()
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
    let bookId=this.data.bookDetailData.id;
    let chapterId=this.data.bookContent.id;
    let url=encodeURIComponent('/pages/bookDetail/bookDetail?bookId='+bookId);

    return {
      title:'书籍详情',
      path:`/pages/home/home?url=${url}`
    }
  }
})