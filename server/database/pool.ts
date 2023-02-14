import path from 'path';
import { Pool, QueryResult } from 'pg';

// TODO: move thi to secrets.js
const PG_URI = `postgres://fslrxxad:${process.env.DB_PASSWORD}@berry.db.elephantsql.com/lhkttazi`;

// This pools multiple db accesses into one request
const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text: string, params: any[], callback: (err: Error, result: QueryResult<any>) => void) => {
    
    const sqlCommand = text.replace(/\$(\d+)/g, (match, index) => {
      return typeof params[index - 1] === 'string'
        ? `\'${params[index - 1]}\'`
        : params[index - 1];
    });
    console.log('running sql command: ', sqlCommand);

    // return result of executing sql command
    return pool.query(text, params, callback);
  },
}
