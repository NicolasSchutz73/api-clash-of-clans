import CardTemplate from "./hbs/CardTemplate.hbs"

export default class Cards {
    constructor() {
        this.initEls();
        this.initEvents();
    }

    initEls() {
        this.els = {}
    }

    initEvents() {
        this.getPokemons();
    }

    getPokemons() {

        const grid = document.getElementById('grid');
        const loader = document.querySelector('#loader')

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            .then(response => response.json())
            .then(data => {
                const results = data.results;
                console.log(results)

                results.forEach((pokemon, index) => {
                    const cardTemplate = CardTemplate({id: index + 1, name: pokemon.name});
                    grid.innerHTML += cardTemplate;
                });

                loader.classList.add('isloaded');

            })
            .catch(err => {
                console.error(err);
            });
    }
}


