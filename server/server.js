import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {Client} from "@notionhq/client";
import bodyParser from "body-parser";


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
dotenv.config({path: '../.env'});

const app = express();
const notion_database = process.env.NOTION_DATABASE;
const corsOptions = {
    origin: '*',
}

app.use(cors(corsOptions));

app.post('/notion-api', jsonParser, async (req, res) => {
    const notionClient = new Client({
        auth: process.env.NOTION_TOKEN,
    });
    const title = req.body.post_titre;
    const link = req.body.post_url;
    let logo = req.body.post_logo;
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
                                content: link,
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
