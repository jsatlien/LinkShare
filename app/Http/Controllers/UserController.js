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
}

module.exports = UserController
