const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  console.log("allUsers", allUsers);
  res.json(allUsers);
});

router.post("/user", async (req, res) => {
  const { email, name } = req.body;
  const result = await prisma.user.create({
    data: {
      email,
      name,
    },
  });
  res.json(result);
});

module.exports = router;
