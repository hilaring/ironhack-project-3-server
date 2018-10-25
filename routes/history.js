const express = require('express');
const router = express.Router();

const History = require('../models/history')

/* GET users listing. */

router.get('/', function (req, res, next) {
  History.find({}, function (err, historyList) {
    if (err) {
      res.json(err)
    } else {
      res.status(200).json(historyList)
    }
  })
});

router.post('/', function (req, res, next) {
  console.log('body', req.body);

  const newHistory = new History({
    syntoms: req.body.syntoms,
    disease: req.body.disease,
    prescription: req.body.prescription,
   
  })

  newHistory.save(function (err) {
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

  History.findById(id, function (err, history) {
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

  History.findByIdAndUpdate(id, historyToUpdate, function (err) {
    if (err) {
      res.json(err)
    } else {
      res.json({ message: "updated" })
    }
  })
})

router.delete('/:id', function (req, res, next) {
  const id = req.params.id

  History.remove({ _id: id }, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: "deleted" });
    }
  })
})


module.exports = router;
