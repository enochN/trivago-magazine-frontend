import axios from 'axios';

const apiAgent = axios.create({

});

const Posts = {
    latestPosts : function () {
        return apiAgent.get('/latest_posts.json');
    },
    postDetails: function (slug) {
        return apiAgent.get(`/${slug}.json`);
    }
};


export default {
    Posts
};