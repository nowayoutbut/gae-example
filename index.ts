import express from 'express';
const port = Number(process.env.PORT) || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Google AppEngine with Typescript!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
