const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(' this is CSC 314 cloud computing ATUNGENE MARY EGBEDE VUG/CSC/22/7599 CLASS DEVOPS ; CI-CD PIPELINE !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
