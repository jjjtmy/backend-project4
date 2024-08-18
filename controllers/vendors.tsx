const modelVendor = require("../models/vendors.tsx");
const modelUsers = require("../models/users.tsx");

module.exports = {
  editVendorPage,
  getVendorPage,
  addVendorReview,
  getReviewsByUser,
};

async function editVendorPage(req, res) {
  console.log("editVendorPageCtrl req ", req.body);
  try {
    const updatedVendorPage = await modelVendor.editVendorPage(req.body);
    res.json(updatedVendorPage.success); //returns true if successful
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getVendorPage(req, res) {
  console.log("getVendorPageCtrl req ", req.params.vendor);
  try {
    const vendor = await modelVendor.getVendorPage(req.params.vendor); //pass in vendorID, returns vendor details as object
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function addVendorReview(req, res) {
  console.log("addVendorReviewCtrl req ", req.body);
  try {
    const userID = await modelUsers.getLoginDetails(req.user.payload.email);
    const review = { ...req.body, user: userID.data._id };
    const newReview = await modelVendor.addVendorReview(review);
    res.json(newReview.success);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getReviewsByUser(req, res) {
  console.log("getReviewsByUserCtrl req ", req.params.userid);
  try {
    const reviews = await modelVendor.getReviewsByUser(req.params.userid);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}
