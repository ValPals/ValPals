import pool from '../database/pool';
import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express';
const userController = {
  updateUser: async (req: Request, res: Response, next: NextFunction) => {
    const {
      displayName,
      formData,
      associateWith,
      interestedIn,
      preferredPronouns,
      _id
    } = req.body;

    const arr = [displayName,
      formData,
      associateWith,
      interestedIn,
      preferredPronouns, _id];
      
    const sql = `UPDATE user_data
    SET "displayName"=$1,
        "formData"= $2,
        "associateWith"= $3,
        "interestedIn"= $4,
        "preferredPronouns"= $5,
    WHERE _id = $6`;
    try {
      const result = await pool.query(sql, arr);
      console.log(`Updated user ${_id} with new values:`, req.body);
      res.status(200).send(`User ${_id} updated`);
    } catch (err) {
      console.error(`Error updating user ${_id}:`, err);
      res.status(500).send('Error updating user');
    }
  },
};

export default userController;
