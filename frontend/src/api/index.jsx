import axios from 'axios';

const API = axios.create({ baseURL: 'https://songapp-g01e.onrender.com/' });

export const getSongsAPI = async () => API.get('/songs/all');
export const getSongByIdAPI = async (id) => API.get(`/songs/${id}`);
export const createSongAPI = async (song) => API.post('/songs/create', song);
export const updateSongAPI = async (song, id) => API.patch(`/songs/${id}`, song);
export const deleteSongByIdAPI = async (id) => API.delete(`/songs/${id}`);
