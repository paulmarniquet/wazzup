<script setup lang="ts">
import axios from "axios";

const runtimeConfig = useRuntimeConfig()

const manWhatsup = () => {
  getRelatedPosts()
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
    for (let i = 0; i < 1; i++) {
      const options = await axios({
        method: 'GET',
        url: 'https://medium2.p.rapidapi.com/article/' + response.data.latestposts[i],
        headers: {
          'X-RapidAPI-Key': medium_token,
          'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
        }
      });
      let link = 'https://medium.com/publications/' + response.data.latestposts[i];
      await createItemInDatabase([options.data.title, link, options.data.image_url, options.data.topics, options.data.subtitle]);
    }
  } catch
      (error) {
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
        "post_titre": body[0],
        "post_url": body[1],
        "post_logo": body[2],
        "post_topics": body[3],
        "post_subtitle": body[4]
      }
    });
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