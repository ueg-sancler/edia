'use strict'

const StudentClass = use("App/Models/StudentClass");
const StudentClassStudent = use("App/Models/StudentClassStudent")

class ClassController {
    async create({ request, response }) {

        const data = request.only([
            "name",
            "year",
        ])
        const students_array = request.only("students").students

        if(!data['year']) return response.json({'success': false, 'message': 'year is required param'})

        const student_class = await StudentClass.create(data)

        if(student_class) {
            students_array.forEach(function (student_id) {

                StudentClassStudent.create({'student_id': student_id, 'student_class_id': student_class.id})
            })
        }
        return response.json(student_class)
    }

    async get({ request, response }) {
        const student_class = await StudentClass.query().with('students').fetch()

        return response.json(student_class)
    }
}

module.exports = ClassController
