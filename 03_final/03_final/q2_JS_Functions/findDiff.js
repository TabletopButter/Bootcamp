// Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

// Hint: Convert the string to an array and then loop over the array.

// See example below ...

// ```
//     This is a string
//     There was string
//       ^^^^^^^          <-- 7 differences
// ```

// In the above example, the function should return 7.

function findDifferences(string1, string2) {
  let a1 = string1.split('')      //split both strings into arrays
  let a2 = string2.split('')     

  let differences=0; // initialize the differences variable

    if(a1.length>=a2.length){                      //depending on which one is longer we would use it for length
        for(i=0;i<a1.length;i++) {                 
            if(a1[i]!==a2[i])                
            differences+=1;                        //if the values are not the same at index of i differences count goes up by 1
        }
    } else {
        for(i=0;i<a2.length;i++) {
            if(a1[i]!==a2[i])                
            differences+=1;
        }
    }

    return differences;                                 //return the differnces count
}