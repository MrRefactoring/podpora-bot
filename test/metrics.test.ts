import request from 'supertest';
import app from '../src/app';

describe('GET /metrics', () => {
    it('return 200 OK', (done) => {
        request(app).get('/metrics')
            .expect(200, done);
    });
});
