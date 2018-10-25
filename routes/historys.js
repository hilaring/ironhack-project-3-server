const express = require('express');
const router = express.Router();

const Historys = require('../models/history')

/* GET users listing. */

router.get('/', function (req, res, next) {
  Historys.find({}, function (err, historyList) {
    if (err) {
      res.json(err)
    } else {
      res.status(200).json(historyList)
    }
  })
});

router.post('/', function (req, res, next) {
  console.log('body', req.body);

  const newHistorys = new Historys({
    syntoms: req.body.syntoms,
    disease: req.body.disease,
    prescription: req.body.prescription,
   
  })

  newHistorys.save(function (err) {
    if (err) {
      res.json(err)
    } else {
      res.json({
        message: "created",
        historys: newHistorys
      })
    }
  })
})

router.get('/:id', function (req, res, next) {

  const id = req.params.id

  Historys.findById(id, function (err, history) {
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

  Historys.findByIdAndUpdate(id, historyToUpdate, function (err) {
    if (err) {
      res.json(err)
    } else {
      res.json({ message: "updated" })
    }
  })
})

router.delete('/:id', function (req, res, next) {
  const id = req.params.id

  Historys.remove({ _id: id }, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: "deleted" });
    }
  })
})


module.exports = router;
