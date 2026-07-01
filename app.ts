import express from "express";
import cors from 'cors'
import helmet from "helmet";
import morgan from "morgan";
import routes from './src/routes'

const app = express();

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

app.use("/api/v1",routes)

export default app;

