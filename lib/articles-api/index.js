import { Router } from "express";
import getArticles from './get-articles';
import newArticle from './new-article';

export default function ArticlesApi(db) {
    const router = Router();
    const collection = db.collection('articles');

    router.get('/', getArticles(collection))
    router.post('/', newArticle(collection));

    return router;
};
