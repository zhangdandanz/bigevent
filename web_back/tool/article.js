var aticle = {
  getSearch: function(options) {
    $.ajax({
      url: ARTICLE_SEARCH,
      success: options.callback
    })
  },
  //   新增分类请求
  getAdd: function(options) {
    $.ajax({
      type: 'post',
      url: ARTICLE_ADD,
      data: options.data,
      success: options.callback
    })

  },
  getEdit: function(options) {
    $.ajax({
      url: ARTICLE_EDIT,
      data: options.data,
      type: 'post',
      success: options.callback
    })

  },
  getDelete: function(options) {
    $.ajax({
      type: 'post',
      url: ARTICLE_DELETE,
      data: options.data,
      success: options.callback

    })

  }
}