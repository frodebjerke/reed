import parseIftttDatetime from '../lib/articles-api/parse-ifttt-datetime';
import moment from 'moment';

describe('Parse ifttt datetime', () => {

    it('', (done) => {
        const date = 'August 23, 2010 at 11:01PM';

        const res = parseIftttDatetime(date);

        if (!res.isValid()) {
            return done('Error parsing ifttt datetime', res);
        }

        if (!res.isSame('2010-08-23', 'day')) {
            return done('Error wrong date parsed ' + res.format());
        }

        done();
    })

})
