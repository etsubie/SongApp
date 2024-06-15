import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000/songs' });

export const getSongsAPI = async () => API.get('/all');
export const getSongByIdAPI = async (id) => API.get(`/${id}`);
export const createSongAPI = async (song) => API.post('/create', song);
export const updateSongAPI = async (song, id) => API.patch(`/${id}`, song);
export const deleteSongByIdAPI = async (id) => API.delete(`/${id}`);
