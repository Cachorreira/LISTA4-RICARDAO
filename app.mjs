import express from "express";
import { logger } from "./middlewares/logger.mjs";
import { validarProduto } from "./middlewares/validarProduto.mjs";
import { autenticar } from "./middlewares/autenticar.mjs";
import { validarEvento } from "./middlewares/validarEvento.mjs";
import { validarTransferencia } from "./middlewares/validarTransferencia.mjs";
import { verificarSaldo } from "./middlewares/verificarSaldo.mjs";
const app = express();

app.use(express.json());

// logger global
app.use(logger);
app.post("/produtos", validarProduto, (req, res) => {
  res.status(201).json({
    mensagem: "Produto criado com sucesso",
    produto: req.body
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
// POST
app.post("/usuarios", autenticar, (req, res) => {
  res.json({ mensagem: "Usuário criado" });
});

// PUT
app.put("/usuarios/:id", autenticar, (req, res) => {
  res.json({ mensagem: "Usuário atualizado" });
});

// DELETE
app.delete("/usuarios/:id", autenticar, (req, res) => {
  res.json({ mensagem: "Usuário deletado" });
  
});
app.post("/eventos", validarEvento, (req, res) => {
  res.json({
    mensagem: "Evento criado com sucesso",
    evento: req.body
  });
});
app.post(
  "/transferencias",
  validarTransferencia,
  logger,
  verificarSaldo,
  (req, res) => {
    res.json({
      mensagem: "Transferência realizada com sucesso",
      dados: req.body
    });
  }
);