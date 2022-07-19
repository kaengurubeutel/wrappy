const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const corsMiddleware = require("./corsOptions")

// Middleware
app.use(bodyParser.json())
    .use(cookieParser())
    .use(corsMiddleware)
    .use(express.json());

// Routen für den Zugriff auf SpotifyApi, das Userprofil und die Listen des Users
const spotifyauth = require('./routes/api/spotify/auth');
const spotifyuserdata = require('./routes/api/spotify/userdata');


// Routen zu den einzelnen Bereichen der API werden gesetzt
app.use('/api/spotify/user-data', spotifyuserdata)
app.use('/api/spotify/auth', spotifyauth);

// setzt den Port bei Localhost auf 5000 und auf einem "echten" server automatisch
const port = process.env.PORT || 5000;

app.listen((port), () => {console.log("Server is running")})

