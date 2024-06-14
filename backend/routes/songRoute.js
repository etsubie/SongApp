import express from "express";
import {
  createSong,
  getSongs,
  getSong,
  updateSong,
  deleteSong,
} from "../controllers/songs.js";

const songRouter = express.Router();

songRouter.get("/all", getSongs);
songRouter.post("/create", createSong);
songRouter.get("/:id", getSong);
songRouter.patch("/:id", updateSong);
songRouter.delete("/:id", deleteSong);

export default songRouter;
