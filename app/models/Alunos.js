const db = require("./db");

const Alunos = db.sequelize.define("alunos", {
  nome: {
    type: db.Sequelize.STRING
  },
  sobrenome: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  endereco: {
    type: db.Sequelize.STRING
  },
  pais: {
    type: db.Sequelize.STRING
  },
  estado: {
    type: db.Sequelize.STRING
  }
});

//Criar tabela aluno
//Alunos.sync({ force: true });

module.exports = Alunos
