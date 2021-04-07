// components/sidebar/sidebar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "flodFlag":{
      type:Boolean,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    author:'作者',
    list:[
      {
         chapters:'第一章',
         title:'少主',
         updateTime:'2021-02-01 10:00'
      },
      {
        chapters:'第二章',
        title:'怪病',
        updateTime:'2021-02-02 11:00'
      },
      {
        chapters:'第三章',
        title:'家教',
        updateTime:'2021-02-03 14:00'
      },
      {
        chapters:'第四章',
        title:'相斥',
        updateTime:'2021-02-04 10:00'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
