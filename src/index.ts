import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { serverport } from './config/environment.config';
import { db } from './models/database.connection';
import approuter from './routes/app.routes';

import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swagger_options } from './config/swagger.config';
import cors from 'cors';
import SocketService from './services/socket.service';

const app = express();

const cors_options = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    transports: ["websocket"],
  };
  app.use(cors(cors_options));


const specs = swaggerJsdoc(swagger_options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json('NIYO ASSESSMENT SERVER RUNNING');
  });

app.use('/api', approuter);


db.sequelize.sync({ force: false }).then(() => {
  
   const server =  app.listen(serverport, () => {

    SocketService.initialize(server);

      console.log(`Server is running at http://localhost:${serverport}`);
    });
  });
  
  export default app;