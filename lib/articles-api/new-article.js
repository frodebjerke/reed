import moment from 'moment';

export default function (req, res, next) {
    const article = req.body;
    article.id = "hei";
    article.completedAt = moment();
    res.send(article);
}
