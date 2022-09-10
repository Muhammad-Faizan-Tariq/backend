const router = require("express").Router();
const { updateUser, deleteUser, getUser, updateFollower, updateUnfollower} = require ("../controllers/userController")

//update user
router.put("/:id", updateUser)

//delete user
router.delete("/:id", deleteUser)

//get a user
router.get("/:id", getUser)

//follow a user
router.put("/:id/follow", updateFollower)

//unfollow a user
router.put("/:id/unfollow", updateUnfollower)

module.exports = router;
