const { Router } = require("express");
const Info = require("../models/Info");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newInfo = new Info(request.body);
  newInfo.save((error, record) => {
    if (error) {
      return response.status(500).json(error);
    }
    return response.json(record);
  });
});

router.get("/", (request, response) => {
  Info.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.get("/:id", (request, response) => {
  Info.findbyId(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
