// Write a function which will determine if a given string is a palindrom
// a. Palindrom = spells the same goign forwarrd as it does backwards
// b. Ignore case


function isPalindrom(text) {
    let rText = text.split('').reverse().join('');
    let test = text.localeCompare(rText)

    if(test ==0)
    return true
    else return false
}

// Piyush example

function pisPalindrom(text) {
    return text.toString().toLowerCase() === text.toString().toLowerCase().split('').reverse().join('')
}


//You are given an unsorted array of numbers like so

// [34, 54, 46, 7784, -345, 667, null, 6576, ...n]

// Your task is to createa f ucntion that returns a true copy of this array such that each element in the new array is unique. you must use ES5, although this coul dbe easily accomplished using ES6

