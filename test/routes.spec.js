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

    describe('Get all le animals', () => {
        it('Should get all le animals', () => {
            return chai.request(server)
            .get('/api/v1/animals')
            .then( (res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('array')
                res.body[0].should.have.property('name')
                res.body[0].should.have.property('species')
                res.body[0].should.have.property('age')
                res.body[0].name.should.equal('Hawky')
                res.body[0].species.should.equal('bird')
                res.body[0].age.should.equal(8)
            })
        })
    })

    describe('Get all le zookeepers', () => {
        it('Should get all le zookeepers', () => {
            return chai.request(server)
            .get('/api/v1/zookeepers')
            .then( (res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.a('array')
                res.body[0].should.have.property('name')
                res.body[0].name.should.equal('Henry')
            })
        })
    })
})