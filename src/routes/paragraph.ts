/**
 * @file Defines all paragraph related routes.
 */

import express from "express";

import ParagraphController from "../controllers/ParagraphController";

const router = express.Router({});

router.get("/", ParagraphController.getAll);

router.post("/", ParagraphController.create);

router.delete("/:id", ParagraphController.delete);

export default router;