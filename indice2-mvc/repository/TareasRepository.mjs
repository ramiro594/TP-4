import fs from 'fs' // importamos el modulo del sistema de archivos de node.js
import path from 'path' // modulo para manejar rutas de archivos

import { fileURLtoPath } from 'url' // para obtener la ruta del archivo actual

// importamos la interfaz de persistencia
import TareasDataSource from './TareasDataSource.mjs'
import Tarea from '../models/tarea.mjs' // importamos el modelo tarea

// obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, '../tareas.txt')

// implementacion concreta que extiende la interfaz TareasDataSource

export default class TareasRepository extends TareasDataSource {
    constructor() {
        super(); // llamada al constructor de la clase base
    }

  // implementacion del metodo obtenerTodas()

    obtenerTodas() {
      try {
        // leer el archivo en formato UTF-8
        const data = fs.readFileSync(filePath, "utf-8");
        // convertir el contenido del archivo en un array de objetos JSON
        const tareas = JSON.parse(data);
        // convertir cada tarea en una instancia de la clase Tarea
        return tareas.map(
          (tareaData) =>
            new Tarea(
              tareaData.id,
              tareaData.titulo,
              tareaData.descripcion,
              tareaData.completado
            )
        );
      } catch (error) {
        // si ocurre un error, como que el archivo no exista, devolvemos un array vacio
        console.error("error al leer el archivo de tareas: ", error);
        return [];
      }
    }

    // implementacion del metodo guardar()
    guardar(tareas) {
        try {
            // convertimos el array de tareas a una cadena JSON con identacion de 2 espacios
            const data = JSON.stringify(tareas, null, 2)

            // guardar la cadena JSON en el archivo de texto
            fs.writeFileSync(filePath, data, 'utf-8')
        } catch (error) {
            // si ocurre un error al guardar los datos, mostramos el error
            console.error('error al guardar las tareas: ', error)
        }
    }

    // implementacion del metodo eliminar()
    eliminar(id) {
        try {
            const tareas = this.obtenerTodas() // obtener todas las tareas existentes
            // filtrar la tarea por ID
            const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
            this.guardar(tareasActualizadas) // guardar la lista actualizada
        } catch (error) {
            console.error('error al eliminar la tarea')
        }
    } 

}