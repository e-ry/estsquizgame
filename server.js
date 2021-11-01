const express = require('express');
const app = express();
const db = require('./queries');
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT :)' });
});

app.get('/', (req, res) => {
  res.send({ a: 'apple' });
});

app.get('/questions/', db.getQuestions);
app.post('/createQuestionAndAnswer/', db.createQuestionAndAnswer);
