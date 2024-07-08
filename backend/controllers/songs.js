import songModel from "../models/songModel.js";

export const createSong = async (req, res) => {
  const { title, genre, imgUrl, audio, singer, publishYear , createdAt} = req.body;

  const newSong = new songModel({
    title,
    genre,
    imgUrl,
    audio,
    singer,
    publishYear,
    createdAt:new Date().toISOString()
  });

  try {
    await newSong.save();

    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSongs = async (req, res) => {
  try {
    const songs = await songModel.find();

    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSong = async (req, res) => {
  const { id } = req.params;

  try {
    const song = await songModel.findById(id);

    const existingSong = await songModel.findById(id);
  if (!existingSong) {
    return res.status(404).send(`No song with id: ${id}`);
  }

    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSong = async (req, res) => {
  const { id } = req.params;
  const { title, genre, imgUrl, audio, singer, publishYear } = req.body;

  const existingSong = await songModel.findById(id);
  if (!existingSong) {
    return res.status(404).send(`No song with id: ${id}`);
  }

  const updatedSong = { title, genre, imgUrl, audio, singer, publishYear, _id: id };

  try {
    const result = await songModel.findByIdAndUpdate(id, updatedSong, { new: true });
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSong = async (req, res) => {
  const { id } = req.params;

  const existingSong = await songModel.findById(id);
  if (!existingSong) {
    return res.status(404).send(`No song with id: ${id}`);
  }

  try {
    await songModel.findByIdAndDelete(id);
    res.json({ message: "Song deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
