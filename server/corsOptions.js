const cors = require('cors');


const corsOptions = {
    origin: ["http://localhost:4000","http://localhost:4000/callback", "http://localhost:4000/insights", "http://localhost:4000/profile"],
    optionSuccessStatus: 200,
}

module.exports = cors(corsOptions);