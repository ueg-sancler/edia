'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class StudentClass extends Model {

    students () {
        return this.hasMany('App/Models/StudentClassStudent', 'id', 'student_class_id')
    }

}

module.exports = StudentClass
