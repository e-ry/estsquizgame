const express = require('express');
const app = express();
const db = require('./queries');
//const bodyParser = require('body-parser');
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

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.get('/options/:id', db.getOptionsById);
app.get('/questions/:id', db.getQuestionById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);
