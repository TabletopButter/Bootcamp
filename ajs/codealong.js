// [1,2,3].map(function(value){
//     return value*2;
// });

//to

// [1,2,3].map(value => value * 2)

// function doubleAndFilter(arr){
//     return arr.map(function(value){
//         return value * 2;
//     }).filter(function(value){
//         return value % 3 ===0;
//     })
// }

// doubleAndFilter([5,10,15,20]);; //30

//to

// var doubleAndFilter = arr => arr.map(value => value *2).filter(value => value%3===0)

// Other than 6 primatives everything else is an object

