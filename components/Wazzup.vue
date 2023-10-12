<script setup lang="ts">
import {Client} from "@notionhq/client";
import axios from "axios";
import * as repl from "repl";

const runtimeConfig = useRuntimeConfig()

const manWhatsup = () => {
  getRelatedPosts()
}

async function getRelatedPosts() {
  const medium_token = runtimeConfig.public.MEDIUM_TOKEN
  const subject = 'javascript'

  try {
    /*    const response = await axios({
          method: 'GET',
          url: 'https://medium2.p.rapidapi.com/latestposts/' + subject,
          headers: {
            'X-RapidAPI-Key': medium_token,
            'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
          }
        });
        for (let i = 0; i < 1; i++) {
          const options = await axios({
            method: 'GET',
            url: 'https://medium2.p.rapidapi.com/article/' + response.data.latestposts[i],
            headers: {
              'X-RapidAPI-Key': '',
              'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
            }
          });*/
    /*
          let title = options.data.tagline;
    */
    let title = "title";
    /*
          let link = 'https://medium.com/publications/' +  response.data.latestposts[i];
    */
    let link = "link";
    /*
          let image = options.data.logo;
    */
    let image = "ok";
    let array = [title, link, image];
    await createItemInDatabase(array);

  } catch (error) {
    console.error(error);
  }
}

async function createItemInDatabase(body: any) {
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/notion-api',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        "titre": body[0],
        "link": body[1],
        "image": body[2]
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

</script>


<template>
  <div>
    <button @click="manWhatsup">Wazzup</button>
  </div>
</template>

<style scoped>

</style>