const express = require('express');
const app = express();

app.use(express.json());

// GET Method: Returns a hardcoded operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST Method: Accepts JSON input and returns processed response
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Find the highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercase = lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];

    // Response object
    const response = {
        is_success: true,
        user_id: "Konkona", // Hardcoded as per example
        email: "konkona.talukdar2021@vitstudent.ac.in",        // Hardcoded as per example
        roll_number: "21BCI0272",       // Hardcoded as per example
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase
    };

    res.status(200).json(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
