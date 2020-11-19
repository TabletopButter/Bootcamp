const animals = require("animals");
const Log = require("log.pets");

console.log(animals());

Log.unicorn();

Log.zoo(animals(),animals(),animals());

console.log("# of animals in generator "+animals.words.length);

let numOfG = 0;
let arrayOfG = [];
let animalsArray = animals.words;


for(i=0;i<animalsArray.length;i++){
    if(animalsArray[i].startsWith("g"))
    arrayOfG.push(animalsArray[i]);
}

console.log("# of animals starting with g: "+arrayOfG.length);

