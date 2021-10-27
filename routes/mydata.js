var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("mydata", {
    title: "Sai Lakshmi Kundana Sakhamuri",
    fact: "I hate cats",
  });
});

module.exports = router;