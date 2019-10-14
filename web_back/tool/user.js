// 用来管理所有接口请求的操作
var user = {
  login: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback,
      // 另一种写法
      success: function(res) {
        options.callback(res)
      }

    })
  },
  logout: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,

      success: options.callback


    })
  },
  getuser: function(options) {
    $.ajax({
      url: USER_INFO,
      success: options.callback,
    })
  },
  getuserinfo: function(options) {
    $.ajax({
      url: USER_INFO_GET,
      success: options.callback

    })
  },
  getuserinfo_edit: function(options) {
    $.ajax({
      url: USER_INFO_EDIT,
      type: 'post',
      data: options.data,
      contentType: false,
      processData: false,
      success: options.callback
    })
  },


};