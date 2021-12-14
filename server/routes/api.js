const express = require('express');
const router = express.Router();

const partController = require('../controllers/partController');

//loads the participants and their data from class with given id#
router.get('/:id/participants',
  partController.getParticipants,
  (req, res) => res.status(200).json(res.locals.participants),
);

//adds a participant to class with given id#
router.post('/:id/participants',
  partController.addParticipants,
  //when a participant is added, redirect to this page
  (req, res) => res.status(200).redirect('/')
);

//deletes a participant from class with given id# and name
router.delete('/:id/participants',
  partController.deleteParticipants,
  (req, res) => res.status(200)
);

//updates a participant with given id# and name
router.put('/:id/participants',
  partController.updateParticipants,
  (req, res) => res.status(200)
);
module.exports = router;