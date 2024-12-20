import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    console.log(req)

    res.send('rota acessada com sucesso!!!')
})
app.post('/users', (req, res) => {
    res.send('ola')
})
app.listen(3000)
