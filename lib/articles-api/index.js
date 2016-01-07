import { Router } from "express";
import newArticle from './new-article';

const router = Router();

router.post('/', newArticle)

export default router;
