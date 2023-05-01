import * as dotenv from 'dotenv';
dotenv.config();
import * as bodyParser from 'body-parser';
import express from 'express';
import myRoute from './routes/api';

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use("/api", myRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;