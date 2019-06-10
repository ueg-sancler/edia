"use strict";
const User = use("App/Models/User");

class AuthController {
  async register({ request, auth, response }) {
    const data = request.only([
      "nome",
      "cpf",
      "data_nasc",
      "coordenador",
      "senha"
    ]);

    const user = await User.create(data);

    //generate token for user;
    let token = await auth.generate(user);
    Object.assign(user, token);

    return response.json(user);
  }

  async login({ request, auth, response }) {
    let { cpf, senha } = request.all();

    try {
      if (await auth.attempt(cpf, senha)) {
        let user = await User.findBy("cpf", cpf);
        let token = await auth.generate(user);

        Object.assign(user, token);
        return response.json(user);
      }
    } catch (e) {
      console.log(e);
      return response.json({
        message: "You are not registered with this combination!"
      });
    }
  }
}

module.exports = AuthController;
