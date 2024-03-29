const express= require('express');
const app= express();
const mongodbClient = require('./DB/mongodb');
const router = require('./Router');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/api', router);


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port", process.env.PORT || 5000);
});
