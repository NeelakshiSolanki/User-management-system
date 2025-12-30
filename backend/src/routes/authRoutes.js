const router = require("express").Router();
const auth = require("../controllers/authController");

// 👇 CORRECT DESTRUCTURING
const { protect } = require("../middleware/authMiddleware");

router.post("/signup", auth.signup);
router.post("/login", auth.login);
router.get("/me", protect, auth.me);
router.post("/logout", protect, auth.logout);

module.exports = router;
