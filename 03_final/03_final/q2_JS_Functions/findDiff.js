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
  let a1 = string1.split('')
  let a2 = string2.split('')

  let differences=0;

    if(a1.length>=a2.length){
        for(i=0;i<a1.length;i++) {
            if(a1[i]!==a2[i])                
            differences+=1;
        }
    } else {
        for(i=0;i<a2.length;i++) {
            if(a1[i]!==a2[i])                
            differences+=1;
        }
    }

    return differences;
}