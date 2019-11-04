import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as methodOverride from 'method-override';
import { RegisterRoutes } from '../.tsoa-temp/routes';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

RegisterRoutes(app);
app.listen(port);
console.log(`Server is listening on port [${port}]`);
