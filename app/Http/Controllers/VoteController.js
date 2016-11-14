'use strict'

const Vote = use('App/Model/Vote')
const Post = use('App/Model/Post')

class VoteController {
  * create (request, response) {
    let user = request.authUser
    let postId = request.param('post_id')
    let data = {}
    data.user_id = user.id
    data.post_id = postId
    data.vote_count = 1

  }
}

module.exports = VoteController
