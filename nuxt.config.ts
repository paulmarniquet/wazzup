
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            MEDIUM_TOKEN: process.env.MEDIUM_TOKEN,
            NOTION_TOKEN: process.env.NOTION_TOKEN,
            NOTION_DATABASE: process.env.NOTION_DATABASE,
        },
    },
})
