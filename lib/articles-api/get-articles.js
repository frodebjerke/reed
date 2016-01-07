import winston from 'winston';

export default function (collection) {
    return (req, res, next) => {
        collection.find().toArray((err, articles) => {
            if (err) return next(err);

            res.send(articles);
        })
    }
}
