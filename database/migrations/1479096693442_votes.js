'use strict'

const Schema = use('Schema')

class VotesTableSchema extends Schema {

  up () {
    this.table('votes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.integer('post_id')
      table.integer('vote')
    })
  }

  down () {
    this.table('votes', (table) => {

    })
  }

}

module.exports = VotesTableSchema
