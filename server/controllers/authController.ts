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

const authController = {
  addUser: async (profile: Profile) => {
    try {
      const arr: Array<any> = [profile.email];
      const sql: string = `INSERT INTO user_data
      (email)
      VALUES ($1)
      RETURNING _id;`;
      const data = await pool.query(sql, arr);
      console.log("this is data: ", data);
      // console.log('this is data rows: ', data.rows[0]);
      // const sqlID: string = `SELECT _id
      // FROM user_data
      // WHERE user_data.email=$1`;
      // const id = await pool.query(sqlID, [arr[0]]);
      return data.rows[0];
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
      console.log('this is data rows: ', data.rows[0]);
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

export default authController;
