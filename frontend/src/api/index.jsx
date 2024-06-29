import axios from 'axios';

const API = axios.create({ baseURL: 'https://songapp-g01e.onrender.com/' });

export const getSongsAPI = async () => API.get('/songs/all');
export const getSongByIdAPI = async (id) => API.get(`/songs/${id}`);
export const createSongAPI = async (newSong) => API.post('/songs/create', newSong);
export const updateSongAPI = async (id, updatedSong) => API.patch(`/songs/${id}`, updatedSong);
export const deleteSongByIdAPI = async (id) => API.delete(`/songs/${id}`);

