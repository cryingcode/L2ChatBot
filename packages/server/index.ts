import express from 'express';
import dotenv from 'dotenv';
import router from './routs';

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

// start the app, list on localhost
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
