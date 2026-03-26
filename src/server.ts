import { app } from "./app";
import { connection } from './config/database/connection'

const port = process.env.PORT

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})

connection.connect((err) => {
    if(err) {
        console.error("Não foi possível se connectar com o banco de dados")
    }
    console.log("Conexão com banco de dados bem sucedida");
})