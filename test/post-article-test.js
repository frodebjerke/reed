import request from "supertest";
import moment from 'moment';
import app from "../lib/app";


describe('post article', () => {

    const article = {
        title: "On lava lamps",
        exerpt: "What are lava lamps really good for?",
        imageUrl: "",
        url: "life.frode.space",
        addedAt: moment('1994-01-01')
    };

    it('article with completedAt and id returned', (done) => {
        request(app)
            .post('/v1/articles')
            .set('Content-Type', 'application/json')
            .send(article)
            .expect('Content-Type', /application\/json/)
            .expect(/"id":/)
            .expect(/"completedAt":/)
            .expect(200, done);
    })

})
