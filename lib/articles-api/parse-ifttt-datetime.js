import moment from 'moment';
import winston from 'winston'

export default function (dateString) {
    const res = moment(dateString, 'MMMM DD, YYYY [at] hh:mmA');
    return res;
}
