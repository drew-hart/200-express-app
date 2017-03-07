const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function (req, res) {
  switch (req.params.animal) {
    case 'pig':
      res.send('The pig says Oink!');
      break;
    case 'cow':
      res.send('The cow says Moo');
      break;
    case 'dog':
      res.send('The dog says Woof Woof!');
      break;
    default:
      res.send('What kind of animal are you?');
  }
});

app.get('/repeat/:action/:num', function (req, res) {
  const num = parseInt(req.params.num, 10);
  const action = req.params.action;
  const actions = [];

  for (let i = 0; i < num; i += 1) {
    actions.push(action);
  }

  res.send(actions.join(' '));
});

app.get('*', function (req, res) {
  res.send('Sorry that page is not found');
});

app.listen(8080, function () {
  console.log('Web server started...');
});
