import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {Client} from "@notionhq/client";
import bodyParser from "body-parser";

dotenv.config({path: '../.env'});
const app = express();
const jsonParser = bodyParser.json()
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
    const logo = req.body.post_logo || "https://www.notion.so/images/page-cover/solid_yellow.png";
    const topics = req.body.post_topics;
    const subtitle = req.body.post_subtitle;
    const response = await notionClient.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE,
        },
        cover: {
            external: {
                url: logo
            }
        },
        icon: {
            emoji: "✍️"
        },
        properties: {
            URL: {
                url: link,
            },
            tag: {
                select: {
                    name: topics[0],
                }
            },
            État: {
                select: {
                    name: "Wazzup"
                }
            },
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
                                content: subtitle,
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
