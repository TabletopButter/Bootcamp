var myPets = [
    {   
        "type": "camel",
        "name": "Wednesday",
        "age": 8,
        "food": "Hay, mostly",
        "daily food quantity": 30
    },
    {
        "type": "cobra",
        "name": "Slitherio",
        "age": 2,
        "food": "Rodents",
        "daily food quantity": 0.05
    },
    {   
        "type": "elephant",
        "name": "Hathi",
        "age": 1,
        "food": "Plant matter, grass, hay, fruit",
        "daily food quantity": 50
    }
]

// My mistake was trying to loop through and then sort, when I could just use sort by itself

// Sort can sort through an array (we have an array of objects), you just need to compare the correct values, in this case we are comapring the daily food quantities value

// To answer your other question the default behavior of sort will convert the elements to a string and then sort each character's unicode which is why in the xample "80" will come before "9".


let sortedPets = myPets.sort(function(a,b){
    return a["daily food quantity"]-b["daily food quantity"]
})

console.log(sortedPets);

