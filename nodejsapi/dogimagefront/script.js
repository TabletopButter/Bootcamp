let image = document.getElementById("pic");
image.setAttribute("src", "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg");


let endpoint = "https://dog.ceo/api/breeds/image/random";

let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    fetch(endpoint)
    .then(function(response){
        if(response.ok)
        return response.json()

        throw Error(response.statusText)
    })
    .then(function(data){
        image.setAttribute("src", data.message)
    })
    .catch(function(error){
        console.error("There was an error: ", error)
    })
    
})

// 4 parts for interfaces
// request url fetch(endpoint)
// get data(JSON) and then parse .then(function(response){
// console.log(response)
// })
// do something with this data
// handle errors