import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import {Client} from "@notionhq/client";


dotenv.config({path: '../.env'});

const app = express();
const notion_database = process.env.NOTION_DATABASE;
const corsOptions = {
    origin: '*',
}

app.use(cors(corsOptions));

app.post('/notion-api', async (req, res) => {

    const notionClient = new Client({
        auth: process.env.NOTION_TOKEN,
    });
    console.log(req.body);
    // get data from request
    const title = req.data.titre;
    const link = req.data.link;
    console.log(title);
/*
    let logo = req.logo;
*/

    const response = await notionClient.pages.create({
        parent: {
            database_id: notion_database,
        },
        properties: {
            title: {
                title: [
                    {
                        text: {
                            content: title,
                        },
                    },
                ],
            },
        },
        children: [
            {
                object: "block",
                type: "paragraph",
                paragraph: {
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: url,
                            },
                        },
                    ],
                },
            },
        ],
    });
    return {
        statusCode: 200,
        body: JSON.stringify(response),
    };
});


app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
