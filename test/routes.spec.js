process.env.NODE_ENV = 'test'

const chai = require('chai')
const should= chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const { knex } =  require('../db/database')
chai.use(chaiHttp)

describe('Zooz routes', () => {
    beforeEach( () => {
        return knex.migrate.rollback()
        .then( () => {
            return knex.migrate.latest()
        })
        .then( () => {
            return knex.seed.run()
        })
    })

    describe('Get all the animals', () => {
        it('Should get all the animals', () => {
            return cahi.request(server)
            .get('/api/v1/animals')
            .then( (res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('array')
                res.body.should.have.property('name')
                res.body.name.should.equal('Hawky')
            })
        })
    })
})