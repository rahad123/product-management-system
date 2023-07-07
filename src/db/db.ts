import { config } from "../config/config";
const db = {
  client: "mysql2",
  connection: {
    host: config.app.host,
    user: config.db.mysql_user_name,
    password: config.db.mysql_password,
    database: config.app.name,
  },
};

export { db };
