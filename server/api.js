const router = require('express').Router();
const axios = require("axios");
const logger = require('./logger');

router.post('/api/article/rate', function(req, res) {
    // First validate that this endpoint is being called by an authenticated and valid user

    // Validate and sanitize input, ie: id, slug, rating, review
    let body = req.body;
    if(!body){
        logger.error("No body passed");
        res.json({error:"No body passed"});
        return;
    }

    if(!body.id && !body.slug){
        logger.error("No ID or slug passed for article");
        res.json({error:"No ID or slug passed for article"});
        return;
    }

    if(!body.rating || typeof body.rating !== "number"){
        logger.error("Invalid rating passed");
        res.json({error:"Invalid rating passed"});
        return;
    }

    if(!body.review){
        logger.error("Invalid review passed");
        res.json({error: "Invalid review passed"});
        return;
    }

    // Ensure id and rating are valid numbers, slug and review are strings

    // Ensure article id or slug references an actual article and fetch article

    // Construct data structure for rating
    let ratingData = {article: {id: body.id}, createdAt: new Date(), rating: body.rating, review: body.review, user: {userId: 1}};


    // Persist rating data to DB, together with timestamp
    logger.info(JSON.stringify(ratingData));

    // Return rating data structure

    res.json(ratingData);
});

router.get("*.json", async (req, res, next) => {
    let response = await axios.get(`http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com${req.url}`);
    res.json(response.data);
});

module.exports = router;