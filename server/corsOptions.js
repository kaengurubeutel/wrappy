const cors = require('cors');


const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3000/insights", "http://localhost:3000/profile"],
    optionSuccessStatus: 200,
}

module.exports = cors(corsOptions);