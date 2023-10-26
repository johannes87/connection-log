import express from 'express';

const app = express();
app.get('/', (req, res) => {
    console.log(`Got request from ${req.socket.remoteAddress}`);
    res.send(req.socket.remoteAddress);
});

app.listen(Number(process.env.LISTEN_PORT), () => {
    console.log(`server.js started`);
});
