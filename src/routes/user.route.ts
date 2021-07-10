import express from "express";
import UserController from "../controllers/user.controller";

const router = express.Router();

router.get("/", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();

  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUser(req.params.id);

  if (!response)
    res.status(404).send({ message: "No user found" })

  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new UserController();
  const response = await controller.createUser(req.body);

  return res.send(response);
});

router.put("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.updateUser(req.params.id, req.body);

  return res.send(response);
});

router.delete("/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.deleteUser(req.params.id);

  return res.send(response);
});

export default router;