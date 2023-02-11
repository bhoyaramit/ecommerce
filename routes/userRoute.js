const express = require("express");
const {
     registerUser, 
     loginUser,
     logOutUser,
     forgotPassword,
     resetPassword,
     getUserDetails, 
     updatePassword ,
     updateProfile,
     getAllUser,
     getSingleUser ,
     updateUserRole,
     deleteUserRole} = require("../controllers/userController");

const { isAuthenicatedUser ,authorizeRoles } = require("../middlewares/auth");
const router = express.Router();



router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/logout").get(logOutUser);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenicatedUser, getUserDetails);
router.route("/password/update").put(isAuthenicatedUser, updatePassword);
router.route("/me/update").put(isAuthenicatedUser, updateProfile);




router.route("/admin/users").get(isAuthenicatedUser, authorizeRoles("admin"), getAllUser);
router.route("/admin/user/:id").get(isAuthenicatedUser, authorizeRoles("admin"), getSingleUser);
router.route("/admin/user/:id").put(isAuthenicatedUser, authorizeRoles("admin"), updateUserRole);
router.route("/admin/user/:id").delete(isAuthenicatedUser, authorizeRoles("admin"), deleteUserRole);


module.exports =router;