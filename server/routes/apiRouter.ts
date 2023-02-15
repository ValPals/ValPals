import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express';
import userController from '../controllers/userController';
const router = express.Router();

router.put('/user', userController.updateUser, (req: Request, res: Response) => {
  res.status(200).json(res.locals.updatedUserData);
});

export default router;
