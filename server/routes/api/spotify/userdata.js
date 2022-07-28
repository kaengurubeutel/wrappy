const { application } = require("express");
const express = require("express");
const request = require("request");
const {stringify} = require("nodemon");
const router = express.Router();
const querystring = require('querystring');
const bodyParser = require("body-parser");


let access_token = "";
let refresh_token = "";
let expiring_time = "";

const {
    clientId,
    clientSecret,
} = require ("../../../credentials");

const baseUrl = "https://api.spotify.com/v1/me/";

//creates header for requests
let createAuthOptions = (token, url) => {
    return {
        url: baseUrl + url,
        //body: body,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
        },
        json: true,
    };
}

//middleware to get token from cookie / State or whatever and check / refresh it if it is expired
let tokenCheckUp = (req, res, next) => {
    access_token = req.headers.access_token;
    refresh_token = req.headers.refresh_token;
    expiring_time = req.headers.expiring_time;
    if (access_token && refresh_token) {
        if (Date.now() < expiring_time) {
            res.locals.token = access_token;
            res.locals.expiring_time = expiring_time;
            next();
        } else {
            let refreshOptions = {
                url: "https://accounts.spotify.com/api/token",
                form: {
                    grant_type: "refresh_token",
                    refresh_token: refresh_token,
                    client_id: clientId,
                    client_secret: clientSecret,
                },
                json: true,
            };

            request.post(refreshOptions, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    res.locals.token = body.access_token;
                    res.locals.expiring_time = Date.now() + parseInt(body.expires_in);
                    next();
                } else {
                    return {
                        "error": "Request failed"
                    };
                }
            });

        }
    }
}
router.use(tokenCheckUp);

/* @param time_range --> short_term || medium_term || long_term
    gives 5 top artists back as json
*/
router.get("/artists", (req, res) => {

    let time = req.headers.time_range

    request.get(createAuthOptions(res.locals.token,"top/artists?"
        + querystring.stringify({
            time_range: time,
            limit: 10,
        })),
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.json({
                    spotifydata: body,
                    access_token : res.locals.token,
                    expiring_time : res.locals.expiring_time,
                });
            } else {
                res.json(error);
            }
        });

});

/* @param timerange --> shortterm, midterm, longterm
    gives top 10 songs back as json
*/
router.get("/tracks", (req, res) => {

    let time = req.headers.time_range

    // @TODO add various time ranges
    request.get(createAuthOptions(res.locals.token,"top/tracks?"
        + querystring.stringify({
            time_range: time,
            limit: 50,
        })),
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.json({
                    spotifydata: body,
                    access_token : res.locals.token,
                    expiring_time : res.locals.expiring_time,
                });
            } else {
                res.json(error);
            }
        });
});

/* gives back the 10 last played songs as JSON */
router.get("/recently-played", (req, res) => {

    request.get(createAuthOptions(res.locals.token,"player/recently-played?"
        + querystring.stringify({
            limit: 10,
            before: Date.now()
        })),
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.json({
                    spotifydata: body,
                    access_token : res.locals.token,
                    expiring_time : res.locals.expiring_time,
                });
            } else {
                res.json(error);
            }
        });

});

/* gives the profile-data of the user back as JSON */

router.get("/profile", (req, res) => {
    request.get(createAuthOptions(res.locals.token,""),(error, response, body) => {
        if (!error && response.statusCode === 200) {
            res.json({
                spotifydata: body,
                access_token : res.locals.token,
                expiring_time : res.locals.expiring_time,
            });
        } else {
            res.json(error);
        }
    });
});

module.exports = router;
