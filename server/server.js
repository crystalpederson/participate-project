const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const apiRouter = require('./routes/api');

/**
 * handle parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));


// uncomment the below for proxy challenge

// const leaderList = [
//   {name: 'Anna', id: 'a0'},
//   {name: 'Ben', id: 'b0'},
//   {name: 'Clara', id: 'c0'},
//   {name: 'David', id: 'd0'},
// ];

app.use('/api', apiRouter);
// app.get('/api/leaders', (req, res) => {
//   return res.status(200).send(leaderList);
// });

if (process.env.NODE_ENV === 'production') {

  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });

};

//app.listen(3000); //listens on port 3000 -> http://localhost:3000/

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;