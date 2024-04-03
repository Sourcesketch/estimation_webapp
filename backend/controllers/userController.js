import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register User
const registerUser = (req, res) => {
  const { FullName, username, password, managerName, role_id, managerId } =
    req.body;
  if (!username || !password || !role_id) {
    return res.status(422).json({ error: "please fill the field properly" });
  }
  User.findOne({ username: username })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      }
      const user = new User({
        FullName: FullName,
        username: username,
        password: password,
        role_id: role_id,
        managerName: managerName,
        managerId: managerId,
      });
      user
        .save()
        .then((result) => {
          console.log(result);
          res.status(200).json({ message: "user register successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Login user
const authUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "please fill the field properly" });
  }
  User.findOne({ username: username })
    .then((userExist) => {
      if (userExist) {
        // console.log(userExist.password);
        bcrypt
          .compare(password, userExist.password)
          .then((p) => {
            // console.log(p);
            if (p) {
              const generateToken = jwt.sign(
                { _id: userExist._id },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1d",
                }
              );

              // save token
              return res.status(200).json({
                username: userExist.username,
                password: userExist.password,
                FullName: userExist.FullName,
                managerName: userExist.managerName,
                token: generateToken,
              });
            } else {
              return res.status(404).json({ message: "User is not found" });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return res.status(404).json({ message: "User is not found" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// get all users

const getAllusers = (req, res) => {
  User.find()
    .populate("role_id", "name")
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// get all resources of single user who is manager
const getAllresouces = (req, res) => {
  User.find({ managerName: req.query.managerName })
    .select("username -_id")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// get id of selected user
const getSelectedUser = (req, res) => {
  User.find({ username: req.query.username })
    .select("_id")
    .populate("role_id", "name -_id")

    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// get single User

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// delete User

const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// update User details

const updateUser = (req, res) => {
  const user = User.findByIdAndUpdate(req.params.id);
  user
    .updateOne({
      username: req.body.username,
      password: req.body.password,
      managerName: req.body.managerName,
      role_id: req.body.role_id,
      FullName: req.body.FullName,
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// sort
const sortUsers = (req, res) => {
  User.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).send(result.toString());
    })
    .catch((err) => {
      console.log(err);
    });
};
export {
  registerUser,
  getAllusers,
  getAllresouces,
  getSelectedUser,
  getUserById,
  deleteUser,
  updateUser,
  authUser,
  sortUsers,
};
