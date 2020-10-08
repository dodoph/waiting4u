const   express         = require('express'),
        bodyParser      = require('body-parser'),
        path            = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Welcome!!</h1>');
});

app.get('/login', (req, res) => {
    res.send('<h1>This will be a login page!<h1>')
});

app.get('/logout', (req, res) => {
    res.redirect('/');
});

var port = process.env.PORT || 3000
app.listen(port, function(req, res){
	console.log('Server Has Started at port ' + port + '!');	
});