const {Router} = require("express");
const Exp = require("../models/Exp");
const router = Router();

router.post("/", (request, response) => {
  const newExp = new Exp(request.body);
  newExp.save((error, record) => {
    // console.log("error", error);
    if (error?.name === "ValidationError")
      return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Exp.find({}, (error, record) => {
    if (error) return response.status(418).json(error.errors);

    response.json(record);
  });
});

module.exports = router;
