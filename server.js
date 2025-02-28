require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(
    cors({
        origin: "*",
        methods: ["GET","POST","UPDATE"],
    })
);

// Dice Roller API
app.get('/roll-dice', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: diceRoll });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});