const express = require("express");
const router = express.Router();
const querystring = require("querystring");
const request = require("request");


const {
  clientId,
  clientSecret,
  redirectUri,
  stateKey,
} = require("../../../credentials");

let access_token = "";
let refresh_token ="";
let expiring_time = "";



/**
 * It generates a random string of characters of a specified length.
 * @param length - The length of the string you want to generate.
 * @returns A random string of characters.
 */
let generateRandomString = function (length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};



/* A route that is called by the frontend to get the access token. */
router.get("/", (req, res) => {
  if(access_token !== "" && refresh_token !== "" && expiring_time !== ""){
      let data = {
        access_token: access_token,
        refresh_token: refresh_token,
        expiring_time: expiring_time
      }
      res.send(data)
  }
  else {
    res.send({error:"no data found"})
  }

});


/* The first step of the authorization process. It is requesting authorization from the user. */

router.get("/login", function (req, res) {

  //saving the random code for the state in a cookie in the response
  let state = generateRandomString(16);
  res.cookie(stateKey, state);
  // scope for the request to the Spotify API
  let scope = "user-read-private user-read-email user-read-recently-played user-top-read";

  //requesting authorization step 1 https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
      })
  );
});


/* The callback function that gets called by Spotify. It is the second step of the authorization
process. It is requesting the access token from Spotify. */
router.get("/callback", function (req, res) {


  let code = req.query.code || null; // receiving the state from Spotify
  let state = req.query.state || null;
  let storedState = req.cookies ? req.cookies[stateKey] : null; //receiving the state from /login

  // check if the right state comes from Spotify
  if (state === null) {
    // error
    res.redirect(
        "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else if (state !== storedState) {
    // error
    res.redirect(
        "/#" +
        querystring.stringify({
          error: "state_mismatch false state " + this.state + "  " + storedState,
        })
    );
  } else {
    res.clearCookie(stateKey); // resetting the Cookie

    // requesting authorization step 2 https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
    let authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
            "Basic " +
            new Buffer(clientId + ":" + clientSecret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // HTTP Code 200 OK and no error --> everything worked

        access_token = body.access_token; // getting data from response
        refresh_token = body.refresh_token;
        expiring_time = new Date().getTime() + 3600000;
        res.redirect('http://localhost:4000/callback');
      } else {
        // error message
        res.send(
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});


module.exports = router;
