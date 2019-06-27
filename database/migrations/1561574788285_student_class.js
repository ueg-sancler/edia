'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentClassSchema extends Schema {
  up () {
    this.create('student_classes', (table) => {
      table.increments()
      table.string('name').nullable()
      table.integer('year').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('student_classes')
  }
}

module.exports = StudentClassSchema
