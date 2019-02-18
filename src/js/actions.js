
import {FETCH_LATEST_POSTS_REQUEST} from "./constants";

function action(type, payload = {}) {
    return {type, ...payload}
}

export const loadLatestPosts = () => action(FETCH_LATEST_POSTS_REQUEST);

