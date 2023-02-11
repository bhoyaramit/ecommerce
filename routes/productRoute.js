const express = require("express");
const { getAllProducts, createProduct ,updateProduct,
    deleteProduct,getProductDetails,createReview ,getProductReviews, 
    deleteReview,getAdminProducts} = require("../controllers/productController");

const router = express.Router();

const { isAuthenicatedUser ,authorizeRoles } = require("../middlewares/auth");


router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);
router.route("/review").put(isAuthenicatedUser,createReview);

// ADmin  Route //
router.route("/admin/products").get(isAuthenicatedUser,authorizeRoles("admin"),getAdminProducts);
router.route("/admin/product/new").post(isAuthenicatedUser, authorizeRoles("admin"), createProduct);
router.route("/admin/product/:id").delete(isAuthenicatedUser,authorizeRoles("admin"),deleteProduct);
router.route("/admin/product/:id").put(isAuthenicatedUser,authorizeRoles("admin"),updateProduct);

// ADmin  Route //

// for getProductReviews => id =>product.id //

router.route("/reviews")
                .get(getProductReviews)
                .delete(isAuthenicatedUser,deleteReview);


module.exports =router;