// pages/tabbar/free_travel/free_travel.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:"定位",
        url:"",
        icon: "/static/images/global_icon_location_style1_default.png",
        hoverIcon:"/static/images/global_icon_location_style1_selected.png",
        viewBg:"white",
        hoverViewBg:"Gainsboro",
        currentTab: 1
      },
      {
        name:"发现",
        url:"",
        icon:"/static/images/global_icon_hot_style1_default.png",
        hoverIcon:"/static/images/global_icon_hot_style1_selected.png",
        viewBg: "white",
        hoverViewBg: "Gainsboro",
        currentTab: 2
      },
      {
        name:"搜索",
        url:"",
        icon:"/static/images/global_icon_search_style1_default.png",
        hoverIcon:"/static/images/global_icon_search_style1_selected.png",
        viewBg: "white",
        hoverViewBg: "Gainsboro",
        currentTab: 3
      }
    ],
    idx:-1,
    currentTab:0
  },
  chooseThis(e) {
    this.setData({
      imgHoverIndex: e.currentTarget.dataset.index
    })
  },
  bindchange:function(e){
    const that = this;
    that.setData({
      imgHoverIndex: e.currentTarget.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.navHeight);
    let that = this;
    that.setData({
      navH: app.globalData.navHeight
    });
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