'use strict'

const Comment = use('App/Model/Comment')

class CommentController {

  * create (request, response) {
    let userId = request.authUser
    let postId = request.param('post_id')
    let data = request.only('content')
    data.post_id = postId
    data.user_id = userId.id

    let newComment = yield Comment.create(data)

    response.json(newComment)
  }
}

module.exports = CommentController
