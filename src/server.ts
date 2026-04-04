import { app } from "./app";
import { connection } from './config/database/connection'
import 'dotenv/config'

const port = process.env.PORT

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})

console.log("ENV TEST:", process.env)

connection.connect((err) => {
    if(err) {
        console.error("Não foi possível se connectar com o banco de dados", err)
        return
    }
    console.log("Conexão com banco de dados bem sucedida");
})
