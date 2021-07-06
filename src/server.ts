import "reflect-metadata"
import "./database" //importar o index do DB
import Express, { response } from 'express';


const app = Express(); // no projeto antigo, o express era chamdo de server


app.listen(3000, () => console.log("Server running"))