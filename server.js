const   express         = require('express'),
        bodyParser      = require('body-parser'),
        path            = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Welcome!!</h1>');
});

var port = process.env.PORT || 5000
app.listen(port, function(req, res){
	console.log('Server Has Started at port ' + port + '!');	
});