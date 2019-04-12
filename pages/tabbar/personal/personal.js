// pages/tabbar/personal/personal.js
const app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        name:'订单',
        url:'',
        icon:'/static/images/global_icon_order_style1_disable.png'
      },
      {
        name: '消息',
        url: '',
        icon: '/static/images/global_icon_notification_style1_disable.png'
      },
      {
        name:'申请入驻',
        url: '',
        icon: '/static/images/global_icon_apply_style1_disable.png'
      },
      {
        name: '收藏的路线',
        url: '',
        icon: '/static/images/global_icon_track_style1_disable.png'
      },
      {
        name: '收藏的导游',
        url: '',
        icon: '/static/images/global_icon_agent_style1_disable.png'
      },
      {
        name: '收藏的民宿',
        url: '',
        icon: '/static/images/global_icon_homestay_style1_disable.png'
      },
    ],
    idx:-1
  },
  wxlogin:function(){
    wx.navigateTo({
      url: '/pages/account/account-profile/account-profile',
    })
  },
  phonelogin:function(){
    wx.navigateTo({
      url: '/pages/account/account_signin/account_signin',
    })
  },
  setting:function(){
    wx.navigateTo({
      url: '/pages/account/profile5_1/profile5_1',
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