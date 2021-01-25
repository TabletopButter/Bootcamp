studentAnswers = ["A", "B", "C", "D", "D", ""];
correctAnswers = ["A", "B", "C", "D", "D", "B"];


function checkAnswers(arrA, arrS){
    let totalScore = 0;
    
    for(let i =0;i<arrA.length; i++) {
        if(arrA[i]===arrS[i]){
            totalScore+=4;
        } else if(arrS[i]==="") {
            totalScore=totalScore;
        } else {
            totalScore=totalScore-1;
        }
    }
    return totalScore;
}

console.log(checkAnswers(studentAnswers, correctAnswers));