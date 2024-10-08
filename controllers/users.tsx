const modelUsers = require("../models/users.tsx");

module.exports = {
  getUserfromID,
  getUserfromUser,
  getUsers,
  getLoginDetails,
  loginUser,
  logoutUser,
  createUser,
  editUser,
  addToWishlist,
  updateComment,
  deleteWishlistItem,
};

async function getUserfromID(req, res) {
  console.log("getUserfromIDCtrl req ", req.params.userid);
  try {
    const userData = await modelUsers.getUserfromID(req.params.userid);
    res.json(userData);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}
async function getUserfromUser(req, res) {
  console.log("getUserfromUser req ", req.params.user);
  try {
    const userData = await modelUsers.getUserfromUser(req.params.user);
    res.json(userData);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getUsers(req, res) {
  console.log("getUsersCtrl req", req.query);
  try {
    const userData = await modelUsers.getUsers(req.query);
    res.json({ users: userData });
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getLoginDetails(req, res) {
  console.log("getLoginDetailsCtrl req", req.query);
  try {
    const loginDetails = await modelUsers.getLoginDetails(req.query.email);
    res.json(loginDetails);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function loginUser(req, res) {
  console.log("loginUserCtrl req", req.body);
  try {
    console.log("loginUserCtrl req", req.body);
    const token = await modelUsers.loginUser(req.body);
    if (!token.success) {
      res.status(400).json({ errorMsg: token.error });
      return;
    }
    res.json(token.data);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function logoutUser(req, res) {
  console.log("logoutUserCtrl req", req.body);
  try {
    const result = await modelUsers.logoutUser(req.body);
    if (!result.success) {
      res.status(400).json({ errorMsg: result.error });
      return;
    }
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function createUser(req, res) {
  console.log("createUserCtrl req", req.body);
  try {
    const userData = await modelUsers.createUser(req.body);
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function editUser(req, res) {
  console.log("editUserCtrl req", req.body);
  try {
    const userData = await modelUsers.editUser(req.body);
    console.log("editUserCtrl res", userData);
    res.json(userData);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function addToWishlist(req, res) {
  console.log("addToWishlistCtrl req", req.body);
  try {
    const result = await modelUsers.addToWishlist(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function updateComment(req, res) {
  console.log("updateCommentCtrl req", req.body);
  try {
    const result = await modelUsers.updateComment(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function deleteWishlistItem(req, res) {
  console.log("deleteWishlistItemCtrl req", req.body);
  try {
    const result = await modelUsers.deleteWishlistItem(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}
