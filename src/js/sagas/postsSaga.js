import { put, fork, takeLatest, call, takeEvery } from 'redux-saga/effects';
import apiAgent from "../apiAgent";
import {
    FETCH_LATEST_POSTS_REQUEST, FETCH_LATEST_POSTS_RESPONSE, FETCH_POST_DETAILS_REQUEST,
    FETCH_POST_DETAILS_RESPONSE
} from "../constants";


export function* fetchLatestPosts() {
    const latestPostsResponse = yield call(apiAgent.Posts.latestPosts);
    yield put({type: FETCH_LATEST_POSTS_RESPONSE, posts: latestPostsResponse.data})
}

export function* fetchPostDetails(payload) {
    const { slug } = payload;
    const postDetailsResponse = yield call(apiAgent.Posts.postDetails, slug);
    console.log(postDetailsResponse.data);
    yield put({type: FETCH_POST_DETAILS_RESPONSE, slug, details: postDetailsResponse.data})
}

function* watchFetchPostDetails() {
    yield takeEvery(FETCH_POST_DETAILS_REQUEST, fetchPostDetails)
}


function* watchFetchPosts() {
   yield takeLatest(FETCH_LATEST_POSTS_REQUEST, fetchLatestPosts);
}

export const postsSaga = [
    fork(watchFetchPosts),
    fork(watchFetchPostDetails)
];