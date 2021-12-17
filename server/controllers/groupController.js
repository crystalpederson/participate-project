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

module.exports = groupController;