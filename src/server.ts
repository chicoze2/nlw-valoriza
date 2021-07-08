import "reflect-metadata"
import "./database" //importar o index do DB
import Express  from 'express';
import { router } from './routes'


const app = Express(); // no projeto antigo, o express era chamdo de server

app.use(Express.json()) // configura o express para ler respose JSON
app.use(router);
app.listen(3000, () => console.log("Server running"))