const express = require('express');
const cors = require('cors');
const app = express();

app.set('puerto', process.env.PORT || 4300);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

app.listen(3000, console.log('Server on port 3000'));