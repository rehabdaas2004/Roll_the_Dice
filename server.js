require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Fix CORS to allow frontend requests
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "UPDATE"],
    })
);

// ✅ Add this root route so the homepage works
app.get('/', (req, res) => {
    res.send('Welcome to the Dice Roller API! Use /roll-dice to roll a dice.');
});

// 🎲 Dice Roller API
app.get('/roll-dice', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: diceRoll });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
