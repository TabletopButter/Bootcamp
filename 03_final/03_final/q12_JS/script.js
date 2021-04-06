// Faulty Solution

function isIsogram(str){
    let strObj = {}     
    
    isIso=true;;// here we track occurrence of each alphabet

    // don't care about case, convert to array and loop over it
    str.toLowerCase().split("").forEach(
        function(letter) {
            if(strObj[letter]=strObj[letter]){  // testing strObj property for each unique letter
                strObj[letter] =false;   // if a repeat letter found, then not an isogram
            } else
            strObj[letter] = true; // if not found, then the property is set to true
            
            console.log(strObj)
        }
    )

        for(var i in strObj){
            if(strObj[i] === false)
            isIso=false;
        }

        return isIso;

}

var test = "Thisway"

console.log(`${test}:`+" "+ isIsogram(test))
