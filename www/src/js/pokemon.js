import PokemonTemp from "./hbs/PokemonTemp.hbs"

export default class Pokemon {
    constructor() {
        this.initEls();
        this.initEvents();
    }

    initEls() {
        this.els = {}
    }

    initEvents() {
        this.getUrl();
    }

    getUrl() {

        // get url params

        const queryString = window.location.search;
        console.log(queryString);

        const urlParams = new URLSearchParams(queryString);

        const id = urlParams.get('id');

        this.getPokemon(id);
    }

    getPokemon(id) {

        const wrapPokemon = document.querySelector('.wrap-pokemon');

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                const data2 = {...data, height: data.height / 10, weight: data.weight / 10}
                const PokemonTemplate = PokemonTemp(data2);

                wrapPokemon.innerHTML += PokemonTemplate;

            }).catch(err => {
                console.log(err);
        });
    }
}