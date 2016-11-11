'use strict'

const Hash = use('Hash')
const User = use('App/Model/User')

class UserController {

  * register(request, response) {
      let data = request.only('email', 'username', 'password')
      data.password = yield Hash.make(data.password)
      let user = yield User.create(data)

      response.json(user)
  }

  * login(request, response) {
      let data = request.only('username', 'password')
      let user = yield User.findBy('username', data.username)
      try {
        if(user) {
          let verify = yield Hash.verify(data.password, 'password')
        }
          if(verify) {
            let token = yield request.auth.generate(user)
            user.token = token
          } else { throw new Error(); }

          }

      } catch(e) {
        response.status(401).json({ error: "Wrong username or password" })
      }
  }
}

module.exports = UserController
