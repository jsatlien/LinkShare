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

    * show (request, response) {
      let userId = request.param('id')
      let postId = request.param('post_id')
      let comments = Comment.query().where('post_id', postId).orderBy('created_at', 'desc')

      if(comments) {
        response.json(comments)
      } else {
        response.status(401).json({error: 'No comments for this post yet.'})
      }
    }
}

module.exports = CommentController
