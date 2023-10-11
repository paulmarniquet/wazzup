<script setup lang="ts">
import {Client} from "@notionhq/client";
import axios from "axios";

const runtimeConfig = useRuntimeConfig()

const manWhatsup = () => {
  const notion_token = runtimeConfig.public.NOTION_TOKEN;
  createItemInDatabase(notion_token);
}

async function getRelatedPosts() {
  const medium_token = runtimeConfig.public.MEDIUM_TOKEN
  const subject = 'javascript'

  try {
    const response = await axios({
      method: 'GET',
      url: 'https://medium2.p.rapidapi.com/latestposts/' + subject,
      headers: {
        'X-RapidAPI-Key': medium_token,
        'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function createItemInDatabase(accessToken: string) {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/notion-api',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }


/*  const notionClient = new Client({
    auth: "",
  });
  const listUsersResponse = await notionClient.users.list({});
  console.log(listUsersResponse);*/

/*  const response = await notionClient.pages.create({
    parent: {
      database_id: "",
    },
    properties: {
      title: {
        title: [
          {
            text: {
              content: "title",
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
                content: "next",
              },
            },
          ],
        },
      },
    ],
  });
  return {
    message: "item_created",
    data: response,
  };*/
}

</script>


<template>
  <div>
    <button @click="manWhatsup">Wazzup</button>
  </div>
</template>

<style scoped>

</style>