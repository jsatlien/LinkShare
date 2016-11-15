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

    let voteCheck = yield Vote.query().where('user_id', user.id)andWhere('post_id', postId)

    if (voteCheck.vote_count.length = 0) {
      let addVote =yield Vote.create(data)

      let post = yield Post.findBy('id', data.post_id)
      if (post.vote_count = null ) {
        post.vote_count = 1
      } else {
        post.vote_count++
      }
      yield post.save()
    }

    response.json(addVote, post)



  }
}

module.exports = VoteController
