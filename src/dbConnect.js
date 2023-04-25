import { MongoClient, ServerApiVersion } from "mongodb";

const cliente = new MongoClient("mongodb+srv://levir:Test123456@cluster0.ai94jpm.mongodb.net/?retryWrites=true&w=majority", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let documentosColecao;

try
{
  await cliente.connect();

  const db = await cliente.db("alura_websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco com sucesso.");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
