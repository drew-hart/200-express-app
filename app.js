const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', (req, res) => {
  const sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!',
    cat: 'Meow',
    goldfish: '...',
  };
  const animal = req.params.animal.toLowerCase();
  const sound = sounds[animal];

  res.send(`The ${animal} says "${sound}"`);
});

app.get('/repeat/:action/:num', (req, res) => {
  const num = parseInt(req.params.num, 10);
  const action = req.params.action;
  const actions = [];

  for (let i = 0; i < num; i += 1) {
    actions.push(action);
  }

  res.send(actions.join(' '));
});

app.get('*', (req, res) => {
  res.send('Sorry that page is not found');
});

app.listen(8080, () => {
  console.log('Web server started...');
});
