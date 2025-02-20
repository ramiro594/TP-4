// definimos una clase abstracta que actua como interfaz para la persistencia de datos
export default class TareasDataSource {

    // metodo abstracto para obtener todas las tareas
    obtenerTodas() {
        throw new Error('este metodo debe ser implementado por la subclase')
    }

    // metodo abstracto para guardar todas las tareas
    guardar() {
        throw new Error('este metodo debe ser implementado por la subclase')
    }

    // metodo abstracto para eliminar la tarea por su ID
    eliminar() {
        throw new Error('este metodo debe ser implementado por la subclase')
    }
}