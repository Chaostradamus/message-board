const express = require("express");
const router = express.Router();
const db = require("../db/messageQueries");

// GET all messages
router.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Message Board", messages });
});

// POST new message
router.post("/new", async (req, res) => {
  await db.createMessage({
    text: req.body.messageText,
    user: req.body.messageUser,
  });
  res.redirect("/");
});

// GET single message
router.get("/:id", async (req, res) => {
  const message = await db.getMessageById(req.params.id);
  res.render("show", { message });
});

module.exports = router;
