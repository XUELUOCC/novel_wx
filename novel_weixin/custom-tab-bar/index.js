// components/tabBar/tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#FF0000",
    list:[
      {
        pagePath: "/pages/home/home",
        text: "首页",
        iconPath: "/image/home.png",
        selectedIconPath: "/image/homeSelected.png"
      },
      {
        pagePath: "/pages/bookCity/bookCity",
        text: "书城",
        iconPath: "/image/bookCity.png",
        selectedIconPath: "/image/bookCitySelected.png"
      },
      {
        pagePath: "/pages/bookCase/bookCase",
        text: "书架",
        iconPath: "/image/bookCase.png",
        selectedIconPath: "/image/bookCaseSelected.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(e){
      console.log(e);
      const data = e.currentTarget.dataset
      let url=data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    },
  }
})
