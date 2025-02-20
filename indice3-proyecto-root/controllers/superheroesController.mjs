import { obtenerSuperheroePorId, buscarSuperheroesPorAtributos, obtenerSuperheroesMayoresDe30 } from '../services/superheroesService.mjs'
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs'

export function obtenerSuperheroePorIdController(req, res) {
    const { id } = req.params
    const superheroe = obtenerSuperheroePorId(parseInt(id))

    if (superheroe) {
        res.send(renderizarSuperheroe(superheroe))
    } else {
        res.status(404).send({mensaje: 'superheroe no encontrado'})
    }
}

export function buscarSuperheroesPorAtributosController(req, res) {
    const { atributo, valor } = req.params
    const superheroes = buscarSuperheroesPorAtributos(atributo, valor)

    if (superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes))
    } else {
        res.status({ mensaje: 'no se encontraron superheroes con ese atributo'})
    }
}

export function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes = obtenerSuperheroesMayoresDe30()
    res.send(renderizarListaSuperheroes(superheroes))
}