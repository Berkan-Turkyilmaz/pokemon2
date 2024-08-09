import express from 'express';
import { createScore, getScores, updateScore } from '../controllers/score.js';




export const scoreRouter = express.Router();

scoreRouter.get("/", getScores);
scoreRouter.post("/", createScore);
scoreRouter.put("/:id", updateScore);