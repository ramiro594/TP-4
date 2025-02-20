export default class superheroesDataSource {
  // metodo abstracto para obtener todos los superheroes
  obtenerTodos() {
    throw new Error("este metodo debe ser implementado por la subclase");
  }
}
