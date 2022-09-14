const express = require("express");
const router = express.Router();
const newController = require("../app/controller/NewsController");
router.post("/", newController.create);
router.get("/", newController.index);
router.get("/:id/edit", newController.edit);
router.put("/:id", newController.update);
router.delete("/:id", newController.destroy);

module.exports = router;
