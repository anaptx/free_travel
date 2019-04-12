// pages/account/profile2_1/profile2_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPassword:true,
    isPassword1:true
  },
  showPassword:function(){
    var isPassword = !this.data.isPassword;
    this.setData({
      isShow: false,
      isPassword: isPassword
    })
  },
  showPassword1: function () {
    var isPassword1 = !this.data.isPassword1;
    this.setData({
      isShow: false,
      isPassword1: isPassword1
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