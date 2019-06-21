"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("nome", 80).notNullable();
      table.string("cpf", 254).notNullable().unique();
      table.string("data_nascimento");
      table.boolean("coordenador").defaultTo(false);
      table.string("senha", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
