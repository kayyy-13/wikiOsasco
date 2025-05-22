import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// Converte o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Libera acesso à pasta public
app.use(express.static(__dirname + '/public'))

// Define onde estão as views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

import routes from "./routes/route.js"
app.use(routes)



app.listen(3000)
