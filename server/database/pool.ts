import path from 'path';
import { Pool, QueryResult, QueryArrayResult} from 'pg';

// TODO: move thi to secrets.js
const PG_URI = `postgres://fslrxxad:${process.env.DB_PASSWORD}@berry.db.elephantsql.com/lhkttazi`;

// This pools multiple db accesses into one request
const pool = new Pool({
  connectionString: PG_URI,
});

interface UserData {
  email: string;
  displayName: string;
  formData: string;
  aboutMe: string;
  preferredPronouns: string;
}

export default {
  query: (text, params):Promise<QueryArrayResult<any[]>> => {
    const sqlCommand = text.replace(/\$(\d+)/g, (match, index) => {
      return typeof params[index - 1] === 'string'
        ? `\'${params[index - 1]}\'`
        : params[index - 1];
    });
    console.log('running sql command: ', sqlCommand);

    // return result of executing sql command
    return pool.query(text, params);
  },
};
