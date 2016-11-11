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
      // data.password = yield Hash.make(data.password)
      let user = yield User.findBy('username', data.username)
      try {
        let verify;
        // because of the scope of 'let', we have to define it at the top of our 'try'
        // statement so it can exist outside of the 'if' statement.
        if(user) {
          verify = yield Hash.verify(data.password, user.password)
        }

        if(!verify) {
          throw new Error();
        } else {
          let token = yield request.auth.generate(user)
          user.access_token = token

          response.json(user)
        }

      } catch(e) {
        response.status(401).json({ error: "Wrong username or password" })
      }
  }
}

module.exports = UserController
