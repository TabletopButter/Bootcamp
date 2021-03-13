const assert = require('assert');
const doubleInt = require('./double');


//bundles all our tests for double function
describe('Test the double function', function(){
    it('1a. doubles 2 into 4', function(){
        let result=doubleInt(2)
        assert.equal(result,4)
    })

    it('1b. should return -20 when i pass in -10', function(){
        let result = doubleInt(-10)
        assert.equal(result, -20)
    })

    it('1c. should throw an expection if I pass in a string', function(){
        assert.throws(function(){
            doubleInt("Acc");
        })
    })
})