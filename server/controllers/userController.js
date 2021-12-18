const db = require('../models/participateModels');

const userController = {};


userController.getAllUsers = (req, res, next) => {

  const queryText = 'SELECT * FROM users'

  db.query(queryText, (err, result) => {
    if(!result){
        return next({
          log: 'userController.getAllUsers: ERROR: Error getting users',
          message: {
            err: 'Error occurred in userController.getAllUsers. Check server logs for more details.',
          },
        });
    }

    res.locals.users = result.rows;
    return next();
  });
};

// /**
// * createUser - create and save a new User into the database.
// */
userController.createUser = (req, res, next) => {

  const queryID = [
    req.body.name,
    req.body.email,
    req.body.password
  ];
  
//   if(!req.body.email || !req.body.password){
//     return res.render('signup', {
//       error: 'Missing email or password'
//     })
//   }

  const queryText = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)'

  db.query(queryText, queryID, (err, result) => {
    if(!result){
        return next({
          log: 'userController.createUser: ERROR: Error creating user',
          message: {
            err: 'Error occurred in userController.createUser. Check server logs for more details.',
          },
        });
    }
      res.locals.user = req.body.name;
      return next();
  });
  
};

// /**
// * verifyUser - Obtain username and password from the request body, locate
// * the appropriate user in the database, and then authenticate the submitted password
// * against the password stored in the database.
// */
userController.verifyUser = (req, res, next) => {
    const queryID = [
        req.body.email,
        req.body.password
    ];
    const queryText = 'SELECT id FROM users WHERE email = ($1) AND password = ($2)'

    db.query(queryText, queryID, (err, result) => {
        console.log(result.rows)
        if(result.rows.length === 0){
            return next({
              log: 'userController.verifyUser: ERROR: Error verifying user',
              message: {
                err: 'Error occurred in userController.verifyUser. Check server logs for more details.',
              },
            });
        }
          res.locals.user = req.body;
          return next();
      });
}
  //return an error if a username or password was not entered
//   if(!username || !password){
//     return next('Error in userController.verifyUser')
//   }

  //check if a user exists in the database and the password is correct
  //if the username cannot be found or the password is incorrect, redirect to /signup
  
//   db.query(queryText, queryID)
//     .then(user => {
//       if(!user){
//         res.redirect(302, '/signup');
//       }
//       res.locals.user = user;
//       next();
//     })
//     .catch( err => {
//       return next('Error in userController.verifyUser' + JSON.stringify(err))
//     })
// };

module.exports = userController;
