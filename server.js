import express from 'express';
import { google } from 'googleapis';
import { urlencoded, json } from 'body-parser';
const app = express();
const PORT = 5000;

app.use(urlencoded({ extended: true }));
app.use(json());

// Use the correct Sheet ID (only the ID, not the full URL)
const SHEET_ID = '1xvXOMmzzFAMi3Q-U6mzhQ2Gi9gkkIAcVDRMRkIHU76E';
const API_KEY = 'AIzaSyArQVoUTS44NiBYP5BPuXHIiDu7ykS9tXg';

async function addToGoogleSheet(data) {
    const sheets = google.sheets({ version: 'v4', auth: API_KEY });
    const request = {
        spreadsheetId: SHEET_ID,
        range: 'Sheet1!A1', // Adjust range as needed
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [data],
        },
    };
    try {
        await sheets.spreadsheets.values.append(request);
        console.log('Data added successfully');
    } catch (err) {
        console.error('Error adding data:', err);
    }
}

app.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required');
    }

    await addToGoogleSheet([name, email, message]);
    res.status(200).send('Form submitted successfully');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
