// *****Import Modules*****
const router = require('express').Router();
const {
  getUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend
} = require('../../controllers/userControllers');

// Route - /api/users
router.route('/').get(getUsers).post(createUser);

// Route - /api/users/:userId
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// Route - /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;