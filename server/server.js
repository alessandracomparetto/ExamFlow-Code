'use strict';

const express = require('express'); 
const morgan = require("morgan"); // logging middleware
const app = express(); 
const port = process.env.PORT || 3001; 

pp.use(morgan("dev"));
app.use(express.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api/express_backend', (req, res) => {
    res.json({textsent: "backend ok!"})
}); 
