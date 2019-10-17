// 基地址
var baseUrl = 'http://localhost:8000'
  // 用户操作的地址
var USER_LOGIN = baseUrl + '/admin/login' //用户登录
var USER_LOGOUT = baseUrl + '/admin/logout' //用户退出
var USER_INFO = baseUrl + '/admin/getuser' //用户基本信息获取
var USER_INFO_GET = baseUrl + '/admin/userinfo_get' //用户详细信息获取
var USER_INFO_EDIT = baseUrl + '/admin/userinfo_edit' //用户编辑

// 文章分类
var ARTICLE_SEARCH = baseUrl + '/admin/category_search' //文章类别获取
var ARTICLE_ADD = baseUrl + '/admin/category_add' //文章类别新增
var ARTICLE_EDIT = baseUrl + '/admin/category_edit' //文章类别分类提交
var ARTICLE_DELETE = baseUrl + '/admin/category_delete' //文章类别获取