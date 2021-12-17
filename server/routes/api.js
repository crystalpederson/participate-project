const express = require('express');
const router = express.Router();

const partController = require('../controllers/partController');
const groupController = require('../controllers/groupController');



//loads the groups from leader with given id#
router.get('/class/:id', 
    groupController.getGroups,
    (req, res) => res.status(200).json(res.locals.groups)
);

//adds a group for a leader with given id#
router.post('/class/:id',
  groupController.addGroup,
  //when a group is added, send name of new group
  (req, res) => res.status(200).json(res.locals.added)
);

//loads the participants and their data from class with given id#
router.get('/participants/:id',
  partController.getParticipants,
  (req, res) => res.status(200).json(res.locals.participants),
);

//adds a participant to class with given id#
router.post('/participants/:id',
  partController.addParticipants,
  //when a participant is added, send name of new participant
  (req, res) => res.status(200).json(res.locals.added)
);

//deletes a participant from class with given id# and name
router.delete('/participants/:id',
  partController.deleteParticipants,
  (req, res) => res.status(200).json(res.locals.deleted)
);

//updates a participant with given id# and name
router.put('/participants/:id',
  partController.updateParticipants,
  (req, res) => res.status(200).json('updated')
);
module.exports = router;