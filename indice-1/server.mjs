import express from 'express'

const app = express()
const PORT = 3000

// ruta get con parametro de ruta
// solicitud: http://localhost:3000/user/123

app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    console.log(`id del usuario recibido: ${userId}`)
    res.send(`usuario recibido: ${userId}`)
})

// ruta get con parametro de consulta
// solicitud: http://localhost:3000/profile?edad=30

app.get('/profile', (req, res) => {
    const edad = req.query.edad
    console.log(`edad recibida: ${edad}`)
    res.send(`edad del perfil: ${edad}`)
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})