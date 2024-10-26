const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routers/Router')
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
// app.use('/api',router);
app.use('/',router);

// app.use('/' , (req, res , err, next)=> {
//     if(err){
//         res.status(401).send(err.message);
//     }
//     next();
// })
const PORT = process.env.PORT || 4001


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
)

