'use strict'

const Schema = use('Schema')

class VotesTableSchema extends Schema {

  up () {
    this.create('votes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.integer('post_id')
      table.integer('vote_count')
    })
  }

  down () {
    this.drop('votes')
  }

}

module.exports = VotesTableSchema
