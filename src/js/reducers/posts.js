
import {FETCH_LATEST_POSTS_ERROR, FETCH_LATEST_POSTS_REQUEST, FETCH_LATEST_POSTS_RESPONSE} from "../constants";

const initialPostsState = {
    isFetchingPosts: false,
    latestPosts: [],
    fetchPostsError: null
};

export default function (state = initialPostsState, action) {

    switch (action.type){
        case FETCH_LATEST_POSTS_REQUEST:
            return {...state, isFetchingPosts: true};
        case FETCH_LATEST_POSTS_RESPONSE:
            return {...state, isFetchingPosts: false, latestPosts: action.posts};
        case FETCH_LATEST_POSTS_ERROR:
            return {...state, isFetchingPosts: false, fetchPostsError: action.error};
        default:
            return state;
    }
}