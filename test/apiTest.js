const request = require('supertest');
const app = require('../index'); //reference to you app.js file


describe('GET /Producto ID', function () {
    it('devuelve producto con codigo 141', function (done) {
        request(app)
            .get('/api/buscar?producto=141')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                "mensaje": "ok",
                "productos": [
                    {
                        "_id": "6158c891ba5c556259803887",
                        "id": "141",
                        "brand": "uqw spwxoup",
                        "description": "cniu xqiqfqyo",
                        "image": "www.lider.cl/catalogo/images/homeIcon.svg",
                        "price": 222219,
                        "__v": 0,
                        "newprice": 222219
                    }
                ]
            })
            .expect(200, done);
    });
});


describe('GET /Producto ID not exists', function () {
    it('comprueba codigo 404 producto inexistente', function (done) {
        request(app)
            .get('/api/buscar?producto=-1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .expect({"mensaje":"sin resultados"}) // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});