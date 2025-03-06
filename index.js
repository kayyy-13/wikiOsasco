import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs');
import routes from './routes/route.js'
app.use(routes)
app.listen(3000);