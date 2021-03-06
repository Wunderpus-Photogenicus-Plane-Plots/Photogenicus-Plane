//----------Initial Setup----------
const express = require('express');
const router = express.Router();

// require in controller when we have a MW function
const apiController = require('../controllers/apiController');

//----------Routers to Controllers----------

router.get('/fetch', apiController.fetchAPI, (req, res) => {
  return res.status(200).json(res.locals.fetched);
});

router.get('/:name', apiController.getPlane, (req, res) => {
  return res.status(200).json(res.locals.planeinDB);
});

router.post('/', apiController.createData, (req, res) => {
  return res.status(200).json(res.locals.newPlane);
});

router.patch('/update/:name', apiController.updatePlane, (req, res) => {
  return res.status(200).json(res.locals.updatedPlane);
});

router.delete('/payus/:name', apiController.deletePlane, (req, res) => {
  return res.status(200).send(`Deleted: ${res.locals.deletedName}`);
});

//----------Export----------
module.exports = router;
