
import {
    FETCH_LATEST_POSTS_ERROR, FETCH_LATEST_POSTS_REQUEST, FETCH_LATEST_POSTS_RESPONSE, FETCH_POST_DETAILS_ERROR,
    FETCH_POST_DETAILS_REQUEST, FETCH_POST_DETAILS_RESPONSE
} from "../constants";

const initialPostsState = {
    isFetchingData: false,
    latestPosts: [],
    fetchPostsError: null,
    fetchPostDetailsError: null,
    postDetails: undefined
};

export default function (state = initialPostsState, action) {

    switch (action.type){
        case FETCH_LATEST_POSTS_REQUEST:
            return {...state, isFetchingData: true};
        case FETCH_LATEST_POSTS_RESPONSE:
            return {...state, isFetchingData: false, latestPosts: action.posts};
        case FETCH_LATEST_POSTS_ERROR:
            return {...state, isFetchingData: false, fetchPostsError: action.error};
        case FETCH_POST_DETAILS_REQUEST:
            return {...state, isFetchingData: true};
        case FETCH_POST_DETAILS_RESPONSE:
            return {...state, isFetchingData: false, postDetails: action.details};
        case FETCH_POST_DETAILS_ERROR:
            return {...state, isFetchingData: false, fetchPostDetailsError: action.error};
        default:
            return state;
    }
}