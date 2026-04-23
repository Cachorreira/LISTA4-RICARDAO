export function validarProduto(req, res, next) {
  const { nome, preco, estoque } = req.body;
  const erros = [];

  // Presença
  if (!nome) erros.push("Nome é obrigatório");
  if (preco === undefined) erros.push("Preço é obrigatório");
  if (estoque === undefined) erros.push("Estoque é obrigatório");

  // Tipo
  if (nome && typeof nome !== "string") erros.push("Nome deve ser string");
  if (preco !== undefined && typeof preco !== "number") erros.push("Preço deve ser número");
  if (estoque !== undefined && !Number.isInteger(estoque)) erros.push("Estoque deve ser inteiro");

  // Regras
  if (nome && nome.length < 3) erros.push("Nome mínimo 3 caracteres");
  if (preco !== undefined && preco <= 0) erros.push("Preço deve ser maior que 0");
  if (estoque !== undefined && estoque < 0) erros.push("Estoque não pode ser negativo");

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  next();
}