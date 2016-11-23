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

    let voteCheck = yield Vote.query()
      .where({'post_id': postId,
              'user_id': user.id }).select('vote_count')
    console.log(voteCheck)
    if (voteCheck !== 1 ) {
      let addVote =yield Vote.create(data)

      let post = yield Post.findBy('id', data.post_id)
      if (post.vote_count = null ) {
        post.vote_count = 1
      } else {
        post.vote_count++
      }
      yield post.save()

      response.json([addVote, post])
    } else {
      response.status(401).json({error: "User can only cast 1 vote per post."})
    }


  }

}

module.exports = VoteController
