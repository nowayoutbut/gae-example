import express from 'express';
const port = Number(process.env.PORT) || 8080;

const app = express();
const env = process.env.NODE_ENV || 'Not Defined';

app.get('/', (req, res) => {
  res.send('<div>Hello Google AppEngine with Typescript!</div>' + `<div>This is ${env}</div>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
