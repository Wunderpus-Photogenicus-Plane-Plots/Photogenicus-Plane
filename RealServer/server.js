// const path = require('path');
// const express = require('express');

// const app = express();

// // this needs to be commented in with the name of our router 
// // const apiRouter = require('./routes/api');
// // app.use('/api', apiRouter);

// const PORT = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



// // catch-all route handler for any requests to an unknown route
// app.use((req, res) => res.status(404).send('lol 404'));

// /**
//  * express error handler
//  * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
//  */

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

// /**
//  * start server
//  */
// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}...`);
// });

// module.exports = app;