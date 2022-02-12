const express = require('express');
const db = require('../config/database');
const Bus = require('../models/Bus');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const moment = require('moment');
const Flutterwave = require('flutterwave-node-v3');
const open = require('open');
var session = require('express-session');
const cookieParser = require('cookie-parser');

// const flw = new Flutterwave(PUBLIC_KEY, SECRET_KEY);
const flw = new Flutterwave("FLWPUBK_TEST-5889c6d76beac180fdb3c050e1aa8b9f-X", "FLWSECK_TEST-9ef593753c40c3ee6c822dc99d028b81-X");




// Get Bus List
module.exports.homepage_get = (req, res)=>{
 
  res.render('home');
  // Bus.findAll() 
  // .then(buses =>{
  //   console.log(buses);
  //   res.render("home", {
  //     bus:buses
  //   });
  // }).catch(err => console.log(err));
}

// get bus result

module.exports.result_get = (req, res)=>{
  Bus.find().sort({createdAt: -1})
  .then((result)=>{
    res.render("result", {Bus:result});
  }).catch((err)=>{
      console.log(err);
  })
}


// display add bus page

// Add a Bus





module.exports.addBus_get =(req, res)=>{

  res.render('add');
}


module.exports.addBus_post = (req, res)=>{
  const m = moment();
const curM = m.toISOString();
const currentMoment = moment().subtract(0, 'days');
const endMoment = moment().add(3, 'days');
  while (currentMoment.isBefore(endMoment, 'day')) {
    let company = req.body.company;
    let from = req.body.from;
    let to = req.body.to;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let date = req.body.date;
    // let { company, from, to, price, quantity, date } = req.body;
    let naNow = currentMoment.format('YYYY-MM-DD')
    console.log(`Loop at ${naNow}`);
    currentMoment.add(1, 'days');
    date = naNow;

      // console.log(req.body);
  console.log("Saved");
  const bus = new Bus({
    company,
    from,
    to,
    price,
    quantity,
    date
  });
  bus.save()
  .then((result)=>{
    console.log(result)
  })
  .catch((err)=>{
    console.log(err)
  })

  res.render('add');

    }

}


// search for seats bus company
let globalNoOfSeat = 0;
module.exports.search_post = (req, res)=>{
  const from = req.query.from;
  const to = req.query.to;
  const noOfSeat = parseInt(req.query.noOfSeat);
  globalNoOfSeat = noOfSeat;
  const date = req.query.date;
  console.log(typeof noOfSeat);

  Bus.find({from: from, to:to, date:date, quantity:{$gte: noOfSeat}}, (error, arrayOfResults) =>{
      res.render('companies', {Bus:arrayOfResults})
      console.log(arrayOfResults);
  })
}

// get details after bus selected

module.exports.selected_get = (req, res)=>{
  busId = req.params.id;
  Bus.findById(busId)
  .then((busdetails)=>{
    console.log(busdetails.company)
      res.render('customer',{busdetails})
  })
  .catch(err=> console.log(err));
}


module.exports.proceed_get = (req, res)=>{
  busId = req.params.id;
  Bus.findById(busId)
  .then((busdetails)=>{
    console.log(busdetails.company)
    res.send(busdetails.company);
      // res.render('payment',{busdetails})
  })
  .catch(err=> console.log(err));
}

module.exports.submit_post = (req, res)=>{
  // console.log(req.body);
  busId = req.params.id;
  Bus.findById(busId)
  .then((busdetails)=>{
    console.log(busdetails.company)
    // res.send("busdetails");
    const priceNow = globalNoOfSeat*busdetails.price;
      res.render('payment',{busdetails,priceNow, globalNoOfSeat})
  })
  .catch(err=> console.log(err));
}




module.exports.paying_post = (req, res)=>{
  busId = req.params.id;
  console.log(busId);
  Bus.findById(busId)
  .then((busdetails)=>{
    const dbPrice = busdetails.price
    const seat = parseInt(dbPrice);
    const newGlobNoOfSeat = parseInt(globalNoOfSeat);
    console.log(seat*newGlobNoOfSeat);
      res.render('payment',{busdetails})
  })
  .catch(err=> console.log(err));

  const cardNo = req.body.cardNo;
  const ExpMonth = req.body.ExpMonth;
  const ExpYear = req.body.ExpYear;
  const cardCvv = req.body.cardCvv;
  const pin = req.body.pin;

}





