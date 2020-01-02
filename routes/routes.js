const express = require("express");
const router = express.Router();
const alunos = require("../app/models/Alunos");
const bodyParser = require("body-parser");

//bodyParser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//HOME
router.get("/", (req, res) => {
  res.render("index");
});

//PRODUTOS
router.get("/produtos", (req, res) => {
  res.render("pages/produtos");
});

//NOTICIAS
router.get("/noticia", (req, res) => {
  res.render("pages/noticias");
});

//SOBRE
router.get("/sobre", (req, res) => {
  res.render("pages/sobre");
});

//CADASTRO
router.get("/produtos/cadastro", (req, res) => {
  res.render("pages/cadastro");
});

//ENVIAR INSCRIÇÃO
router.post("/produtos/cadastro", (req, res) => {
  let alerts_error = [];
  let alerts_success = [];

  //VERIFICAR CAMPO NOME EM BRANCO
  if (
    !req.body.nome ||
    typeof req.body.nome == undefined ||
    req.body.nome == null
  ) {
    alerts_error.push({ texto: "Campo nome inválido!" });
  }

  //VERIFICAR CAMPO SOBRENOME EM BRANCO
  if (
    !req.body.sobrenome ||
    typeof req.body.sobrenome == undefined ||
    req.body.sobrenome == null
  ) {
    alerts_error.push({ texto: "Campo sobrenome inválido!" });
  }

  //VERIFICAR CAMPO EMAIL EM BRANCO
  if (
    !req.body.email ||
    typeof req.body.email == undefined ||
    req.body.email == null
  ) {
    alerts_error.push({ texto: "Campo e-mail inválido!" });
  }

  //VERIFICAR CAMPO ENDEREÇO EM BRANCO
  if (
    !req.body.endereco ||
    typeof req.body.endereco == undefined ||
    req.body.endereco == null
  ) {
    alerts_error.push({ texto: "Campo endereço inválido!" });
  }

  //VERIFICAR SE O FORMULÁRIO ESTÁ EMBRANCO
  if (alerts_error.length > 2) {
    while (alerts_error.length > 0) {
      alerts_error.pop();
    }
    alerts_error.push({ texto: "É necessario prenncher todos os campos!" });
  }

  //RENDERIZAR O ERRO
  if (alerts_error.length > 0) {
    res.render("pages/cadastro", { error: alerts_error });
  } else {
    //ENVIAR INFORMAÇÕES PRO BANCO DE CADOS
    alunos
      .create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        endereco: req.body.endereco,
        pais: req.body.pais,
        estado: req.body.estado
      })
      .then(() => {
        //RENDERIZAR ALERTA DE SUCESSO
        alerts_success.push({ texto: `Parabens ${req.body.nome}!` });
        res.render("pages/cadastro", { success: alerts_success });
      })
      .catch((error) => {
        //RENDERIZAR ERRO DE ENVIO
        while (alerts_error.length > 0) {
          alerts_error.pop();
        }
        alerts_error.push({ texto: "Falha no envio do formulário" });
        res.render("pages/cadastro", { error: alerts_error });
      });
  }
});

module.exports = router;
