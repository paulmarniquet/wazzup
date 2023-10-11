
export default defineNuxtConfig({
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            MEDIUM_TOKEN: process.env.MEDIUM_TOKEN,
            NOTION_TOKEN: process.env.NOTION_TOKEN,
        },
    },
})
