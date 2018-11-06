const express = require('express');
const router = express.Router();

const Histo = require('../models/history')

/* GET users listing. */

router.get('/', function (req, res, next) {
  Histo.find({}, function (err, historyList) {
    if (err) {
      res.json(err)
    } else {
      res.status(200).json(historyList)
    }
  }).populate('patient');
});

router.post('/', function (req, res, next) {
  console.log('body', req.body);

  const newHistory = new Histo({
    syntoms: req.body.syntoms,
    disease: req.body.disease,
    prescription: req.body.prescription,
  })

  newHistory.save(function (newHistory, err) {
    if (err) {
      res.json(err)
    } else {
      res.json({
        message: "created",
        history: newHistory
      })
    }
  })
})

router.get('/:id', function (req, res, next) {

  const id = req.params.id

  Histo.findById(id, function (err, history) {
    if (err) {
      res.json(err)
    } else {
      res.json(history)
    }
  })
})

router.put('/:id', function (req, res, next) {
  const id = req.params.id;
  const historyToUpdate = {
    syntoms: req.body.syntoms,
    disease: req.body.disease,
    prescription: req.body.prescription,
   
  }

  Histo.findByIdAndUpdate(id, historyToUpdate, function (err) {
    if (err) {
      res.json(err)
    } else {
      res.json({ message: "updated" })
    }
  })
})

router.delete('/:id', function (req, res, next) {
  const id = req.params.id

  Histo.remove({ _id: id }, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: "deleted" });
    }
  })
})


module.exports = router;
