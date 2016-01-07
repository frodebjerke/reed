import express from "express";
import bodyParser from "body-parser";
import morgan from 'morgan';
import winston from 'winston';

import articlesApi from './articles-api';

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/v1/articles', articlesApi);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    winston.info(`Application running on port ${port}`);
})
