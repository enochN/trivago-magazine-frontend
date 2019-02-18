import { put, fork, takeLatest, call } from 'redux-saga/effects';
import apiAgent from "../apiAgent";
import {FETCH_LATEST_POSTS_REQUEST, FETCH_LATEST_POSTS_RESPONSE} from "../constants";


export function* fetchLatestPosts() {
    const latestPostsResponse = yield call(apiAgent.Posts.latestPosts);
    yield put({type: FETCH_LATEST_POSTS_RESPONSE, posts: latestPostsResponse.data})
}

function* watchFetchPosts() {
   yield takeLatest(FETCH_LATEST_POSTS_REQUEST, fetchLatestPosts);
}

export const postsSaga = [
    fork(watchFetchPosts)
];