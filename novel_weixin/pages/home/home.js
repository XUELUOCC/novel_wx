// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookShareFlag:true,
    bookCaseFlag:true,
    // loadingFlag:false,
    list:[
      {
        id:'1',
        imgPath:'../../image/book1.jpg',
        book:'圣道',
        author:'龙神',
        describeBook:{
          status:'连载',
          wordNumber:'13万字',
          grade:'0.0'
        },
        introduct:'大道无情，仙路无边。何人陪我，傲世九天。本站提示：各位书友要是觉得《圣道1》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！',
        rankList:{
          rankName:'月票榜',
          time:'2021年11月',
          ranking:'八'
        }
      },
      {
        id:'2',
        imgPath:'../../image/book1.jpg',
        book:'圣道',
        author:'龙神',
        describeBook:{
          status:'连载',
          wordNumber:'13万字',
          grade:'0.0'
        },
        introduct:'大道无情，仙路无边。何人陪我，傲世九天。本站提示：各位书友要是觉得《圣道1》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！',
        rankList:{
          rankName:'月票榜',
          time:'2021年11月',
          ranking:'八'
        }
      },
      {
        id:'3',
        imgPath:'../../image/book1.jpg',
        book:'圣道',
        author:'龙神',
        describeBook:{
          status:'连载',
          wordNumber:'13万字',
          grade:'0.0'
        },
        introduct:'大道无情，仙路无边。何人陪我，傲世九天。本站提示：各位书友要是觉得《圣道1》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！',
        rankList:{
          rankName:'月票榜',
          time:'2021年11月',
          ranking:'八'
        }
      },

    ]
  },
  bookClick(e){
    // console.log(e.currentTarget.dataset.index)
    let index=e.currentTarget.dataset.index;
    wx.showToast({
      title:'加载中...',
      icon:'loading',
      duration:1500,
      success:function(){
        wx.navigateTo({
          url:'/pages/bookDetail/bookDetail?index='+index
        })
      }
    })
  },
  read(e){
    console.log(e)
    let bookId=e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'/pages/chapterContent/chapterContent?bookId='+bookId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // //调用应用实例的方法获取全局数据
    // let app=getApp();
    // //注册组件
    // new app.tabBar;

    //分享
    if(options.url){
      let url = decodeURIComponent(options.url);
 
      wx.navigateTo({
        url
      })

    }
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
    wx.showToast({
      title:'加载中...',
      icon:'loading',
      duration:1500,
      success:function(){

      }
    })
    console.log(this.data.loadingFlag)
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
      })
    }
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