<script setup lang="ts">
import {ref} from 'vue';
import axios from "axios";

const runtimeConfig = useRuntimeConfig();
const inputValue = ref('');
const sliderValue = ref(3);

const manWhatsup = () => {
  getRelatedPosts(inputValue.value, sliderValue.value);
}

async function getRelatedPosts(subject: string, number: number) {
  const medium_token = runtimeConfig.public.MEDIUM_TOKEN;
  try {
    const response = await axios({
      method: 'GET',
      url: `https://medium2.p.rapidapi.com/latestposts/${subject}`,
      headers: {
        'X-RapidAPI-Key': medium_token,
        'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
      }
    });

    const promises = Array.from({length: number}, async (_, i) => {
      const options = await axios({
        method: 'GET',
        url: `https://medium2.p.rapidapi.com/article/${response.data.latestposts[i]}`,
        headers: {
          'X-RapidAPI-Key': medium_token,
          'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
        }
      });

      const link = `https://medium.com/publications/${response.data.latestposts[i]}`;
      return [options.data.title, link, options.data.image_url, options.data.topics, options.data.subtitle];
    });

    const results = await Promise.all(promises);

    results.forEach(createItemInDatabase);
  } catch (error) {
    console.error(error);
  }
}

function createItemInDatabase(body: any) {
  try {
    axios({
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
  <div class="body">
    <div class="column">
      <input v-model="inputValue" type="text" placeholder="Sujet" class="input">
      <input v-model="sliderValue" type="range" min="1" max="10" class="slider" id="myRange">
    </div>
    <button @click="manWhatsup">Wazzup</button>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.column {
  display: flex;
  flex-direction: column;
}

.input, .slider {
  margin-bottom: 10px;
}
</style>
