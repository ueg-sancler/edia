'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentClassStudentSchema extends Schema {
  up () {
    this.create('student_class_students', (table) => {
      table.increments()
      table.integer('student_class_id').unsigned().references('id').inTable('student_classes')
      table.integer('student_id').unsigned().references('id').inTable('students')
      table.timestamps()
    })
  }

  down () {
    this.drop('student_class_students')
  }
}

module.exports = StudentClassStudentSchema
