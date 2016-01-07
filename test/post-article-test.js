import request from "supertest";
import app from "../lib/app";

describe('post article', () => {

    it('respond with hello world', (done) => {
        request(app)
            .post('/v1/articles')
            .expect('hello world', done);
    })

})
