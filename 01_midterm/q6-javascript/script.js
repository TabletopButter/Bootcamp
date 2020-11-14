

// for (i=0; i<=5; i++){
//     if(i%2==0)
//     console.log("The number "+i+" is even")

//     else{
//         console.log("The number "+i+" is odd")
//     }
// }

function iterate(a,b){
    const oddEven={};
    let starVal=a;
    let endVal=b;
    
    for (i=starVal; i<=endVal; i++){
        if(i%2==0){
        oddEven[i]={
            i: "even"
        }
        }
        else{
            oddEven[i]={
                i:"odd"
            }
        }

    }
    return oddEven;

}