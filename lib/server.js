import winston from 'winston';
import { MongoClient } from 'mongodb';
import App from './app';

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/reed-development';

MongoClient.connect(mongodbUrl, (err, db) => {
    if (err) {
        winston.error(err);
        return
    }
    winston.info('db connection alive');
    const app = App(db);
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        winston.info(`Application running on port ${port}`);
    })
})
