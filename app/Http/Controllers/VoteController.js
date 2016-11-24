'use strict'

const Vote = use('App/Model/Vote')
const Post = use('App/Model/Post')

class VoteController {
  * create (request, response) {
    let currentUser = request.authUser
    let postId = request.param('post_id')
    let data = {}
    data.user_id = currentUser.id
    data.post_id = postId

    let voteCheck = yield Vote.query()
      .where({'post_id': postId,
              'user_id': currentUser.id }).select('vote_status');
    console.log(voteCheck)

    if (voteCheck === true) {
      response.status(401).json({error: "User can only cast 1 vote per post."})
    } else {
      let addVote = yield Vote.create(data)
      yield addVote.save();
      let post = yield Post.findBy('id', data.post_id)
      let votes = post.vote_count;
      if (votes === null ) {
        post.vote_count = 1;
      } else {
        post.vote_count = votes++;
      }
      yield post.save()

      response.status(202).json([post, addVote]);
    }

  }

}

module.exports = VoteController
