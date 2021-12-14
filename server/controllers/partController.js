const db = require('../models/participateModels');

const partController = {};

partController.getParticipants = (req, res, next) => {
    const classID = [req.params.id]
    const queryText = 'SELECT name, status, counter FROM participants WHERE class_id = ($1)';
  
    db.query(queryText, classID, (err, result) =>{
      if(!result){
        return next({
          log: 'partController.getParticipants: ERROR: Error getting participants data',
          message: {
            err: 'Error occurred in partController.getParticipants. Check server logs for more details.',
          },
        });
      }
      res.locals.participants = result.rows;
      next();
    });
};

partController.addParticipants = (req, res, next) => {
  const queryID = [
    req.params.id,
    req.body.name,
  ];
  
  const queryText = 'INSERT INTO participants (class_id, name, status, counter) VALUES ($1, $2, FALSE, 0)';

  db.query(queryText, queryID, (err, result) =>{
    if(!result){
      return next({
        log: 'partController.addParticipants: ERROR: Error adding participant data to database',
        message: {
          err: 'Error occurred in partController.addParticipants. Check server logs for more details.',
        },
      });
    }
    next();
  });

};

partController.deleteParticipants = (req, res, next) => {
  const deleted = [
    req.params.id,
    req.body.name
  ]

  const queryText = 'DELETE FROM participants WHERE class_id = ($1) AND name = ($2)';

  db.query(queryText, deleted, (err, result) =>{
    if(!result){
      return next({
        log: 'partController.deleteParticipants: ERROR: Error deleting participant data from database',
        message: {
          err: 'Error occurred in partController.deleteParticipants. Check server logs for more details.',
        },
      });
    }
    res.locals.deleted = req.body.name
    next();
  })
};

partController.updateParticipants = (req, res, next) => {
  
  if(req.body.status === false){
    queryText = 'UPDATE participants SET status = TRUE WHERE class_id = ($1) AND name = ($2)';
  }else{
    queryText = 'UPDATE participants SET status = FALSE WHERE class_id = ($1) AND name = ($2)';
  }

  const queryID = [
    req.params.id,
    req.body.name,
  ];

  db.query(queryText, queryID, (err, result) =>{
    if(!result){
      return next({
        log: 'partController.updateParticipants: ERROR: Error updating participant data to database',
        message: {
          err: 'Error occurred in partController.updateParticipants. Check server logs for more details.',
        },
      });
    }
    next();
  });

};

  module.exports = partController;