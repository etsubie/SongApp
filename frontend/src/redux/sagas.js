import { call, put, takeEvery } from 'redux-saga/effects';
import { getSongsAPI, createSongAPI, updateSongAPI, deleteSongByIdAPI, getSongByIdAPI } from '../api/index';
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongRequest,
  createSongSuccess,
  createSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
  fetchSongByIdSuccess,
  fetchSongByIdFailure,
  fetchSongByIdRequest,
} from './songsSlice';
  
function* fetchSongSaga() {
  try {
    const response = yield call(getSongByIdAPI);
    yield put(fetchSongByIdSuccess(response.data));
  } catch (error) {
    yield put(fetchSongByIdFailure(error.message));
  }
}
function* fetchSongsSaga() {
  try {
    const response = yield call(getSongsAPI);
    yield put(fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* createSongSaga(action) {
  try {
    const response = yield call(createSongAPI, action.payload);
    yield put(createSongSuccess(response.data));
  } catch (error) {
    yield put(createSongFailure(error.message));
  }
}

function* updateSongSaga(action) {
  try {
    const { id, formData } = action.payload;
    const response = yield call(updateSongAPI, id, formData);
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSongSaga(action) {
  try {
    yield call(deleteSongByIdAPI, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export function* watchSongs() {
  yield takeEvery(fetchSongByIdRequest.type, fetchSongSaga)
  yield takeEvery(fetchSongsRequest.type, fetchSongsSaga);
  yield takeEvery(createSongRequest.type, createSongSaga);
  yield takeEvery(updateSongRequest.type, updateSongSaga);
  yield takeEvery(deleteSongRequest.type, deleteSongSaga);
}
