// ========================= REGISTER NEW USER =========================

// POST: api/users/register
// UNPROTECTED
const registerUser = (req, res, next) => {
  res.json("Registered user");
};

// ========================= LOG IN =========================

// POST: api/users/login
// UNPROTECTED
const loginUser = (req, res, next) => {
  res.json("Login user");
};

// ========================= USER PROFILE =========================

// POST: api/users/:id
// PROTECTED
const getUser = (req, res, next) => {
  res.json("User profile");
};

// ========================= CHANGE USER AVATAR (profile picture) =========================

// POST: api/users/change-avatar
// PROTECTED
const changeAvatar = (req, res, next) => {
  res.json("Change user avatar");
};

// ========================= EDIT USER DETAILS (from profile) =========================

// POST: api/users/edit-user
// PROTECTED
const editUser = (req, res, next) => {
  res.json("Edit user details");
};

// ========================= GET ALL USERS =========================

// POST: api/users/authors
// UNPROTECTED
const getAuthors = (req, res, next) => {
  res.json("Get all users/authors");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
};
