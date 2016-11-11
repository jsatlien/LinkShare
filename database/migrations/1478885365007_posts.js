'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.string('title', 60)
      table.string('url')
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
