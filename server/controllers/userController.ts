import pool from '../database/pool';

interface Profile {
    displayName: string;
    email: string;
  }

interface UserData {
  email: string;
  displayName: string;
  formData: string;
  aboutMe: string;
  preferredPronouns: string;
}

const userController = {

  addUser: async (profile: Profile) => {
    try {
      const arr: Array<any> = [
        profile.displayName,
        profile.email,
      ];
      const sql: string = `INSERT INTO user_data
      (displayName, email)
      VALUES ($1, $2)
      RETURNING _id;`;
      const data = await pool.query(sql, arr);
      // const info: any = await data.rows[0]._id
      const sqlID : string = `SELECT _id
      FROM user_data
      WHERE user_data.email=$1`;
      const id = await pool.query(sqlID, [arr[1]]);
      return id;
      // see if this works?
      // console.log(data.rows);
      // return info;
    } catch (err) {
      console.log('addUser', err);
    }
  },
  getUser: async (email): Promise<any> => {
    try {
      const sql = `SELECT * 
      FROM user_data
      WHERE user_data.email=$1`;
      const data = await pool.query(sql, [email]);
      if (data.rows.length === 0) {
        return null;
      } else if (data.rows.length === 1) {
        return data.rows[0];
      } else {
        console.warn('more than one user found');
        throw '';
      }
    } catch {
      console.log('crash in userController.getUser');
    }
  },
};


export default userController;