import { Router } from "express";
import newArticle from './new-article';

export default function ArticlesApi(db) {
    const router = Router();

    router.post('/', newArticle(db.collection('articles')));

    return router;
};
