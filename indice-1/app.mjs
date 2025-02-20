import express from 'express'

// crear una instancia de express

const app = express()

// consigurar el puerto en el que el servidor se escuchará
const PORT = 3000

// ruta basica

app.get('./', (req, res) => {
    res.send('hola, mundo!')
})

// ruta get para el home
// solicitud: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('bienvenido a la pagina de inicio')
})

// ruta get para recibir datos simples
// solicitud: http://localhost:3000/data
app.get('/data', (req, res) => {
    res.send('datos recibidos correctamente')
})

// ruta get con parametro de ruta
// solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    res.send(`soy el usuario ${userId}`)
})

// ruta get con multiples parametros
// solicitud: http://localhost:3000/product/electronics/456
app.get('/product/category/:id', (req, res) => {
    const { category, id } = req.params
    res.send(`categoria: ${category}, id del producto: ${id}`)
})

// ruta get con parametro de consulta
// solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
    const query = req.query.q
    res.send(`el resultado de su busqueda es: ${query}`)
})

// ruta get con multiples parametros de consulta
// solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const { type, minPrice, maxPrice } = req.query
    res.send(`filtro por tipo: ${type}, el rango de precios es: ${minPrice} - ${maxPrice}`)
})




// iniciar el servidor

app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})