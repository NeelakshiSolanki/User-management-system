const router = require("express").Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

router.get("/", protect, adminOnly, userController.getUsers);
router.put("/:id/activate", protect, adminOnly, userController.activateUser);
router.put("/:id/deactivate", protect, adminOnly, userController.deactivateUser);

module.exports = router;
