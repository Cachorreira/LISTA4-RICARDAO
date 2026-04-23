export function validarTransferencia(req, res, next) {
  const { valor, contaOrigem, contaDestino } = req.body;
  const erros = [];

  // Presença
  if (valor === undefined) erros.push("Valor é obrigatório");
  if (!contaOrigem) erros.push("Conta origem é obrigatória");
  if (!contaDestino) erros.push("Conta destino é obrigatória");

  // Tipo
  if (valor !== undefined && typeof valor !== "number") {
    erros.push("Valor deve ser número");
  }

  // Regra
  if (valor !== undefined && valor <= 0) {
    erros.push("Valor deve ser maior que 0");
  }

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  next();
}