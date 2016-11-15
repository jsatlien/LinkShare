'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.table('posts', (table) => {
      table.integer('vote_count')  
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
