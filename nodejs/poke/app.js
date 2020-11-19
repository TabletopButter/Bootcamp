const pokemon = require("pokemon");
let pokemons = require("pokemon");

let i =0;
let poke=[];

for(i=0;i<5;i++)
{
    poke[i]=pokemon.random();
}

console.log(poke);