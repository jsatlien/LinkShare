'use strict'

const Post = use('App/Model/Post')
class PostController {

  * create (request, response) {
    let userId = request.param('id')
    let data = request.only('title', 'url')
    data.user_id = userId

    let newPost = yield Post.create(data)

    response.json(newPost)
  }
}

module.exports = PostController
