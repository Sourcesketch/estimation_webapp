import jwt, { decode } from "jsonwebtoken";
import User from "../models/userModel.js";
import Role from "../models/roleModal.js";

const verifyToken = (req, res, next) => {
  let token = req.header("x-access-token");
  console.log(token);
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  const config = process.env;
  jwt.verify(token, config.JWT_SECRET, (err, decode) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized user !",
      });
    }
    req._id = decode.id;
    next();
  });
};

const admin = (req, res, next) => {
  const user_admin = User.findById(req._id)
    .populate({
      path: "roles",
      match: { access_level: 3 },
    })
    .exec();
  console.log(user_admin);
  next();
};

const level2 = (req, res, next) => {
  const user_manager = User.findById(req._id)
    .populate({
      path: "roles",
      match: { access_level: 2 },
    })
    .exec();
  console.log(user_manager);
  next();
};

const level1 = (req, res, next) => {
  const user_resource = User.findById(req._id)
    .populate({
      path: "roles",
      match: { access_level: 1 },
    })
    .exec();
  console.log(user_resource);
  next();
};

export { verifyToken, admin, level2, level1 };
