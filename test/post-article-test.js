import request from "supertest";
import app from "../lib/app";
import { MongoClient } from 'mongodb';

describe('post article', () => {

    let db;

    before((done) => {
        MongoClient.connect('mongodb://localhost:27017/reed-mocha-tests', function (err, database) {
            if (err) return done(err);
            db = database;
            done();
        });
    })

    const article = {
        title: "On lava lamps",
        excerpt: "What are lava lamps really good for?",
        imageUrl: "",
        url: "life.frode.space",
        addedAt: 'August 23, 2010 at 11:01PM'
    };

    it('article with completedAt and id returned', (done) => {
        request(app(db))
            .post('/v1/articles')
            .set('Content-Type', 'application/json')
            .send(article)
            .expect('Content-Type', /application\/json/)
            .expect(/"_id":/)
            .expect(/"completedAt":/)
            .expect(200, done);
    })

    after((done) => {
        db.dropDatabase((err) => {
            db.close();
            if (err) done(err);
            done();
        });
    })

})
