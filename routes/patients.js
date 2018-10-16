var express = require('express');
var router = express.Router();

const Patient = require('../models/patient')

/* GET users listing. */

router.get('/patients', function(req, res, next) {

  Patient.find({}, function(err, patientList) {
    if( err) {
      res.json(err)
    } else {
      res.status(200).json(patientList)
    }
  })
});

router.post('/patients', function(req, res, next) {
  console.log('body', req.body);
  
  var newPatient = new Patient( {
    name: req.body.name,
    last_name: req.body.last_name,
    email: req.body.email,
    number: req.body.number,
    adress: req.body.adress,
  } )

  newPatient.save( function(err) {
    if(err) {
      res.json(err)
    } else {
      res.json({
        message: "created",
        patient: newPatient
      })
    }
  })
})

router.get('/patients/:id', function(req, res, next) {

  var id = req.params.id

  Patient.findById( id, function(err, patient){
    if(err){
      res.json(err)
    } else {
      res.json(patient)
    }
  })
})

router.put('/patients/:id', function(req, res, next) {
  var id = req.params.id;
  var patientToUpdate = {
    name: req.body.name,
    last_name: req.body.last_name,
    email: req.body.email,
    number: req.body.number,
    adress: req.body.adress,
    }

  Patient.findByIdAndUpdate(id, patientToUpdate, function(err){
    if(err) {
      res.json(err)
    } else {
      res.json({message: "updated"})
    }
  })
})

router.delete('/patients/:id', function(req, res, next) {
  var id = req.params.id

  Patient.remove({ _id: id }, function(err){
    if(err) {
      res.json(err);
    } else {
      res.json({ message: "deleted" });
    }
  })
})


module.exports = router;