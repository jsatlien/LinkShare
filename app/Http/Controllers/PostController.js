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
  * show (request, response) {
    let userId = request.param('id')
    let posts = yield Post.query().where('user_id', userId)
    if (posts) {
      response.json(posts)
    } else {
      response.status(401).json({ error: 'This user currently has no posts.'})
     }
  }
}


module.exports = PostController
