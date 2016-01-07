import moment from 'moment';
import winston from 'winston';
import parseIftttDatetime from './parse-ifttt-datetime';

export default function(collection) {
    return (req, res, next) => {
        const article = parse(req.body);

        collection.insert(article, (err, result) => {
            if (err) next(err);
            res.send(result.ops[0]);
        });
    }
}

function parse(article) {
    return {
        title: article.title,
        excerpt: article.excerpt,
        url: article.url,
        imageUrl: article.imageUrl,
        user: article.user,
        addedAt: parseIftttDatetime(article.addedAt),
        completedAt: moment()
    }
}
