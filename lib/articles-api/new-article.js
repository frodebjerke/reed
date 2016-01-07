import moment from 'moment';

export default function(collection) {
    return (req, res, next) => {
        const article = req.body;
        article.completedAt = moment();

        collection.insert(article, (err, result) => {
            if (err) next(err);
            res.send(result.ops[0]);
        });
    }
}
