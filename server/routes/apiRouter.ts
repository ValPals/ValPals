import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express';

const router = express.Router();

router.get('/testing', (req: Request, res: Response) => {
  res.status(200).json('hello world');
});

export default router;
