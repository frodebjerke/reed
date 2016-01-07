import express from "express";
import bodyParser from "body-parser";
import morgan from 'morgan';
import articlesApi from './articles-api';

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/v1/articles', articlesApi);

export default app;
