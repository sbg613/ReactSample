const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //res.send('Hellow World!');
    res.sendFile(__dirname + "/web/html/index.html");
});

app.get('/css/index.css', (req, res) => {
    console.log(`css/index.css`);
    res.sendFile(__dirname + "/web/css/index.css");
});

app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});