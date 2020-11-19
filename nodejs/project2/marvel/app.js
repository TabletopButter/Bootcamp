const marvel=require("marvel-characters");

console.log(marvel());

listOfHeroes = marvel.characters;
manHeroes = [];

console.log("# of characters in the db: " +listOfHeroes.length);

for(i=0;i<listOfHeroes.length;i++){
    if(listOfHeroes[i].includes("Man"))
    manHeroes.push(listOfHeroes[i])
}

console.log(manHeroes);

console.log(listOfHeroes.find(element=> element=="Iron Man"));

let doesBatmanExist = false;

if(listOfHeroes.find(element=>element=="Batman")==true)
    doesBatmanExist = true;

else
    doesBatmanExist = false;


if(doesBatmanExist==true)
console.log("I am Batman");
else
console.log("Who is Batman??");
    

    