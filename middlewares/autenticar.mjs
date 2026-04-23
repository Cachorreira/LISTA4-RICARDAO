export function autenticar(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (apiKey !== "senha123") {
    return res.status(401).json({
      erros: ["Acesso nao autorizado"]
    });
  }

  next();
}
//LOGIN ERRRADO
//export function logger(req, res, next) {
  //const inicio = Date.now();

  //res.on("finish", () => {
    //const tempo = Date.now() - inicio;

  
    //if (res.statusCode >= 400) {
      //console.log(
        //`[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode} ${tempo}ms`
      //);
    //}
  //});

  //next();
//}