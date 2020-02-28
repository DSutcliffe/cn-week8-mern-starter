const express = require ('express');        // web application framework
const bodyParser = require ('body-parser'); // get form data
const cors = require ('cors');              // communicate between ports - Cross Origin Resource Sharing

const app = express();

// Tell express to use cors
app.use(cors());

// change later - just an example for now how to connect react to express
app.get('/ping', (req, res) => {
    res.send('pong');
})

app.listen(8080, () => {
    console.log('server running on port 8080');
});

// Everything above is all we need for backend