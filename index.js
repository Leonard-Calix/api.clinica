const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 4300);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())

app.listen(app.get('port'), console.log('Server on port ' + app.get('port')));