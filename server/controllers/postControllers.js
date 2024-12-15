const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const Post = require("../models/postModel");
const User = require("../models/userModel");
const HttpError = require("../models/errorModel");

// ========================= CREATE POST =========================

// POST: api/posts
// PROTECTED
const createPost = async (req, res, next) => {
  try {
    const { title, category, description } = req.body;
    if (!title || !category || !description) {
      return next(
        new HttpError("Please fill in all fields and choose a thumbnail.", 422)
      );
    }

    const { thumbnail } = req.files;
    if (thumbnail.size > 2000000) {
      return next(new HttpError("Thumbnail should be less than 2mb.", 422));
    }

    let fileName;
    fileName = thumbnail.name;
    let splitFileName = fileName.split(".");
    let newFileName =
      splitFileName[0] + uuid() + "." + splitFileName[splitFileName.length - 1];
    thumbnail.mv(
      path.join(__dirname, "..", "uploads", newFileName),
      async (err) => {
        if (err) {
          return next(new HttpError(err));
        } else {
          const newPost = await Post.create({
            title,
            category,
            description,
            thumbnail: newFileName,
            creator: req.user.id,
          });
          if (!newPost) {
            return next(new HttpError("Post couldn't be created.", 422));
          }
          const currentUser = await User.findById(req.user.id);
          const userPostCount = currentUser.posts + 1;
          await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });

          res.status(201).json(newPost);
        }
      }
    );
  } catch (error) {
    return next(new HttpError(error));
  }
};

// ========================= GET ALL POSTS =========================

// GET: api/posts
// UNPROTECTED
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ updatedAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error));
  }
};

// ========================= GET POST BY ID =========================

// GET: api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return next(new HttpError("Post not found.", 422));
    }
    res.status(200).json(post);
  } catch (error) {
    return next(new HttpError(error));
  }
};

// ========================= GET POSTS BY CATEGORY =========================

// GET: api/posts/categories/:category
// PROTECTED
const getPostsByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const categoryPosts = await Post.find({ category }).sort({ createdAt: -1 });
    res.status(200).json(categoryPosts);
  } catch (error) {
    return next(new HttpError(error));
  }
};

// ========================= GET POSTS BY AUTHOR =========================

// GET: api/posts/users/:id
// UNPROTECTED
const getPostsByAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ creator: id }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error));
  }
};

// ========================= EDIT POST =========================

// PATCH: api/posts/:id
// PROTECTED
const editPost = async (req, res, next) => {
  try {
    let fileName;
    let newFileName;
    let updatedPost;
    const postId = req.params.id;
    let { title, category, description } = req.body;

    if (!title || !category || description.length < 12) {
      new HttpError("Please fill in all fields.", 422);
    }
    
    if (!req.files) {
      updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, category, description },
        { new: true }
      );
    } else {
      const oldPost = await Post.findById(postId);
      fs.unlink(path.join(__dirname), "..", "uploads", oldPost.thumbnail),
        async (err) => {
          if (err) {
            return next(new HttpError(err));
          }
        };
      const { thumbnail } = req.files;
      if (thumbnail.size > 2000000) {
        return next(new HttpError("Thumbnail should be less than 2mb.", 422));
      }
      fileName = thumbnail.name;
      let splitFileName = fileName.split(".");
      newFileName =
        splitFileName[0] +
        uuid() +
        "." +
        splitFileName[splitFileName.length - 1];
      
      thumbnail.mv(
        path.join(__dirname, "..", "uploads", newFileName),
        async (err) => {
          if (err) {
            return next(new HttpError(err));
          }

          updatedPost = await Post.findByIdAndUpdate(
            postId,
            {
              title,
              category,
              description,
              thumbnail: newFileName,
            },
            { new: true }
          );
        }
      );
    }

    if (!updatedPost) {
      return next(new HttpError("Unable to update post.", 400));
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    return next(new HttpError(error));
  }
};

// ========================= DELETE POST =========================

// DELETE: api/posts/:id
// PROTECTED
const deletePost = async (req, res, next) => {
  try {
    res.json("Delete Post");
  } catch (error) {
    return next(new HttpError(error));
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  getPostsByCategory,
  getPostsByAuthor,
  editPost,
  deletePost,
};
