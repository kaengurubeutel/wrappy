const clientId = ""; // needs to be added 
const clientSecret = "";
const redirectUri = "http://127.0.0.1:5000/api/spotify/auth/callback"; // the api that gets called after login
const stateKey = "spotify_auth_state";

module.exports = {
    clientId,
    clientSecret,
    redirectUri,
    stateKey
};
