import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const app = express();
const notion_database = process.env.NOTION_DATABASE;
const corsOptions = {
    origin: '*',
}

app.use(cors(corsOptions));

app.post('/notion-api', async (req, res) => {
    try {
        const response = await axios('https://api.notion.com/v1/databases/' + notion_database, {
            headers: {
                'Authorization': process.env.NOTION_TOKEN,
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
