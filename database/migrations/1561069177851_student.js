'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string("nome", 80).notNullable();
      table.string("nome_responsavel", 80);
      table.string("cpf", 254).notNullable().unique();
      table.string("data_nascimento");
      table.string("telefone");
      table.string("endereco");
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentsSchema
