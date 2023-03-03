const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const prisma = new PrismaClient();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.get("/", async (req, res) => {
  const allRestaurants = await prisma.restaurant.findMany();
  res.json(allRestaurants);
});

router.post("/restaurant", async (req, res) => {
  const { title, recommand, image, authorEmail } = req.body;

  // upload image
  cloudinary.uploader
    .upload(image)
    .then(async (img) => {
      const image = img.secure_url,
        image_public_id = img.public_id;
      const result = await prisma.restaurant.create({
        data: {
          title,
          recommand,
          image,
          image_public_id,
          author: { connect: { email: authorEmail } },
        },
      });
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send({
        message: "failure",
        error,
      });
    });
});

router.get(`/restaurant/:id`, async (req, res) => {
  const { id } = req.params;

  const restaurant = await prisma.restaurant.findUnique({
    where: { id: Number(id) },
  });
  res.json(restaurant);
});

router.delete(`/restaurant/:id`, async (req, res) => {
  const { id } = req.params;
  const restaurant = await prisma.restaurant.findUnique({
    where: { id: Number(id) },
  });

  if (restaurant) {
    result = await prisma.restaurant.delete({
      where: {
        id: Number(id),
      },
    });

    cloudinary.uploader
      .destroy(restaurant.image_public_id)
      .then(() => {
        res.json(result);
      })
      .catch((error) => {
        response.status(500).send({
          message: "failure",
          error,
        });
      });
  }

  res.json(restaurant);
});

module.exports = router;
