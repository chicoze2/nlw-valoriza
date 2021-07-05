import Express, { response } from 'express';
const app = Express(); // no projeto antigo, o express era chamdo de server



app.get('/', (request, response) => { //req e res
    return response.send('Olá NLW')
})


app.post('/test', (request, response) => {
    return response.send('Olá NLW METODO POSTAGEM')
})


app.listen(3000, () => console.log("Server running"))


