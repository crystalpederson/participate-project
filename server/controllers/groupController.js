const db = require('../models/participateModels');

const groupController = {};

//sends a list of classes that a user has
groupController.getGroups = (req, res, next) => {
    const leaderID = [req.params.id]
    const queryText = 'SELECT id, name FROM classes WHERE leader_id = ($1)';
  
    db.query(queryText, leaderID, (err, result) =>{
      if(!result){
        return next({
          log: 'groupController.getGroups: ERROR: Error getting groups data',
          message: {
            err: 'Error occurred in groupController.getGroups. Check server logs for more details.',
          },
        });
      }
      res.locals.groups = result.rows;
      next();
    });
};

//adds a group
groupController.addGroup = (req, res, next) => {
  const queryID = [
    //this is the leader_id that is passed from the URL
    req.params.id,
    //this is the name of the class to be added
    req.body.name,
  ];
  
  const queryText = 'INSERT INTO classes (name, leader_id) VALUES ($2, $1)'

  db.query(queryText, queryID, (err, result) =>{
    if(!result){
      return next({
        log: 'groupController.addGroup: ERROR: Error adding participant data to database',
        message: {
          err: 'Error occurred in groupController.addGroup. Check server logs for more details.',
        },
      });
    }
    res.locals.newGroup = req.body.name;
    next();
  });
}

groupController.deleteGroup = (req, res, next) => {
    const deleted = [
      req.params.id,
      req.body.name
    ]
    
    const queryText = 'DELETE FROM classes WHERE leader_id = ($1) AND name = ($2)';
  
    db.query(queryText, deleted, (err, result) =>{
      if(!result){
        return next({
          log: 'groupController.deleteGroup: ERROR: Error deleting group data from database',
          message: {
            err: 'Error occurred in groupController.deleteGroup. Check server logs for more details.',
          },
        });
      }
      res.locals.deletedGroup = req.body.name;
      next();
    })
};

module.exports = groupController;