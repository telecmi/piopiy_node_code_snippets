const express = require('express');
const piopiy = require('piopiy');
const app = express();
app.use(express.json());
app.post('/connect-incoming-call', (req, res) =>
{
    console.log(req.body);
    var test = piopiy.Action();
    test.forward(TO_NUMBER, PIOPIY_NUMBER,
    {
        duration: 10,
        timeout: 50,
        loop: 2
    });
    res.send(test.PCMO())
});
app.listen(5000)
