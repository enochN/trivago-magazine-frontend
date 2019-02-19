
import {FETCH_LATEST_POSTS_REQUEST, FETCH_POST_DETAILS_REQUEST} from "./constants";

function action(type, payload = {}) {
    return {type, ...payload}
}

export const loadLatestPosts = () => action(FETCH_LATEST_POSTS_REQUEST);
export const loadPostDetails = (slug) => action(FETCH_POST_DETAILS_REQUEST, {slug});

