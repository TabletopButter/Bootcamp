function doubleInt(num){
    
    if(typeof num !=="number"){
        throw 'not a number';
    }
    return num*2
}

module.exports = doubleInt;