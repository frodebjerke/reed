import winston from 'winston';
import app from './app';

const port = process.env.PORT || 3000;
app.listen(port, () => {
    winston.info(`Application running on port ${port}`);
})
