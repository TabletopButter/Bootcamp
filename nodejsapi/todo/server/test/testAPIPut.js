const app = require('../server')
const supertest = require('supertest')
const debug = require('debug') ('testAPIPut.js')

describe('3. Put test', function(){
    it('3a. Should return status of 202, JSON data, and isComplete toggled', function(done){
       
        let todo = {description:'Complete Homework', isComplete: false};
        
        supertest(app)
        .post('/todos')
        .set('Accept','application/json')
        .send(todo)
        .expect(201)
        .expect(/homework/i)
        .end(function(err,results){
            supertest(app)
            .put('/todos/'+results.body.id)
            .expect(202)
            .expect({
                description: results.body.description, 
                id: results.body.id, 
                isComplete: !todo.isComplete
            })
            .end(function(){
                debug('Put test is done')
                done()
            })
        })
        


    })
})