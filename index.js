const express = require('express') 

const app = express()



app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'))
app.get('/user', (req, res) => {
    const { name, age } = req.query;
    res
        .status(200)
        .json({
            name,
            age
        })
    }
)
app.listen(3000, () => console.log('servidor rodando na porta 3000'))
