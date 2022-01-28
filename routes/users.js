import express from "express";
import { v4 as uuidv4 } from "uuid";

import {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

// all routes in here are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteUserById);

router.patch("/:id", updateUserById);

export default router;
