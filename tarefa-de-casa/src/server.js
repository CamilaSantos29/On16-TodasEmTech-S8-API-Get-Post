const pokedexJson = require('./models/pokedex.json')
const express = require('express')
const app = express()

app.use = (express.json())

app.listen(3000, () => {
    console.log("Servidor na porta 3000")
})

app.get("/", (request,response) => {
    response.status(200).json([
        {
            "mensagem": "Deu certo: lista de pokemons"
        }
    ])
})

app.get("/pokedex/buscar/:id", (request, response) => {
    let idRequest = request.params.id

    let pokemonEncontrado = pokedexJson.find(pokedex => pokedex.id == idRequest)

    response.status(200).send(pokemonEncontrado)
})

app.get("/pokedex/tipo", (request, response) => {
    let tipoPokemon = request.query.type.toLowerCase()
    let tipoEncontrado = pokedexJson.filter(pokedex => pokedex.type == tipoPokemon)

    response.status(200).send(tipoEncontrado)
})

app.post("/pokedex", (request, response) => {
    let nomeRequest = request.body.name
    let tipoRequest = request.body.type

    let novoPokemon = {
        id: (pokedexJson.length) + 1,
        name: nomeRequest,
        type: tipoRequest,
    }
    pokedexJson.push(novoPokemon)   
    response.status(201).json(
    [{
        "mensagem": "seu novo Pokemon foi cadastrado",
        novoPokemon
    }]

    )
})