const app = require('../server')
const supertest = require('supertest')

describe('1. Get test', function(){
    it('1a. Should return status of 200 and JSON', function(done){
        supertest(app)
        .get('/todos')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
})