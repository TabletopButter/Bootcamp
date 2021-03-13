// 5 to 100 but for multiples of 7 print hello instead of the number and for multiples of 5 print Motu


for(i = 5; i<=100; i++) {

    if((i%7==0) && (i%5==0)) {
        console.log("Hello Motu")
    } else if(i%7==0){
        console.log("Hello")
    } else if(i%5==0) {
        console.log("Motu")
    } else {
        console.log(i)
    }
}   

// for(i = 5; i<=100; i++) {

//     if(i%7==0){
//         console.log("Hello")
//     } else if(i%5==0) {
//         console.log("Motu")
//     } else if((i%7==0) && (i%5==0)) {
//         console.log("Hello Motu")
//     }else {
//         console.log(i)
//     }
// }   