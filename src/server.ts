import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ hello: 'world' });
});

app.listen(3333, () => console.log('The app has started at port 3333'));
