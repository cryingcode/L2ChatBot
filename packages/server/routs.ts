import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
   res.send('Hello World!');
   // res.send(process.env.OPENAI_API_KEY);
});

router.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello World!' });
   // res.send(process.env.OPENAI_API_KEY);
});

router.post('/api/chat', chatController.semdMessage);

export default router;
