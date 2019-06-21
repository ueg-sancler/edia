'use strict'

const Student = use("App/Models/Student");

class StudentController {
    async create({ request, response }) {

        const data = request.only([
            "nome",
            "nome_responsavel",
            "cpf",
            "data_nascimento",
            "telefone",
            "endereco"
        ])
        const exist = await Student.findBy('cpf', data['cpf'])
        if( exist )
        {
            return response.json({
                message: "Já existe um aluno com esse CPF cadastrado!"
            });
        }

        const student = await Student.create(data)
        return response.json(student)
    }

    async get({ request, response }) {
        const students = await Student.all()

        return response.json(students)
    }
}

module.exports = StudentController
