const app = require('../server')
const supertest = require('supertest')

describe('2. Post test', function(){
    it('2a. Should return status of 201 for Posting a new todo', function(done){
       
       let todo = {
            description: 'Complete homework',
           isComplete:false
        }
        supertest(app)
        .post('/todos')
        .set('Accept', 'application/json')
        .send(todo)
        .expect(201)
        .expect(/HOMEWORK/i)
        .end(done)

    })
})