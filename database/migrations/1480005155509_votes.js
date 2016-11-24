'use strict'

const Schema = use('Schema')

class VotesTableSchema extends Schema {

  up () {
    this.table('votes', (table) => {
      table.boolean('vote_status').defaultTo(true)
    })
  }

  down () {
    this.table('votes', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = VotesTableSchema
