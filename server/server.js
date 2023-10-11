import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.json());

app.get('/notion-api', async (req, res) => {
    try {
        const response = await axios('https://api.notion.com/v1/databases//', {
            headers: {
                'Authorization': '',
                'Notion-Version': '2022-06-28'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
