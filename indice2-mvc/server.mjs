import express from 'express' // importamos el framework express
// importamos los controladores
import { listarTareasController,
    listarTareasCompletadasController,
    crearTareaController,
    completarTareaController,
    eliminarTareaController} from './controllers/tareaController'


const app = express() // imicializamos una aplicacion de express
const PORT = 3000 // definimos el puerto en el que escuchará el servidor

// middelware para permitir el manejo de solicitudes con cuerpo en formato JSON
app.use(express.json())

// rutas 
    // ruta para obtener todas las rutas
app.get('/tareas', listarTareasController)
    // ruta para obtener las tareas completadas 
app.get('/tareas/completadas', listarTareasCompletadasController)
    // ruta para crear una nueva tarea
app.post('/tareas', crearTareaController)
    // ruta para marcar una tarea como completada
app.put('/tareas/:id/completar', completarTareaController)
    // ruta para eliminar una tarea
app.delete('/tareas/:id', eliminarTareaController)

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})