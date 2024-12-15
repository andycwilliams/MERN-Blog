const { Router } = require("express");
const router = Router();

const {
  createPost,
  getAllPosts,
  getPost,
  getPostsByCategory,
  getPostsByAuthor,
  editPost,
  deletePost,
} = require("../controllers/postControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.get("/categories/:category", getPostsByCategory);
router.get("/users/:id", getPostsByAuthor);
router.patch("/:id", authMiddleware, editPost);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
