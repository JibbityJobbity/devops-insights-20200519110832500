const express = require('express');
const route = require('routes/ourWeatherAPI.js');
const app = express();

app.use('/', route);
app.listen(3001, () => {
});

