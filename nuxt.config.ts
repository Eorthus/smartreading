// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        // CSS file in the project
        '~/assets/css/main.css',
        // SCSS file in the project
        '~/assets/css/main.scss'
    ],
    modules: [
        '@nuxt/image-edge',
    ],
    app: {
        head: {
            script: [
                {src: 'js/gsap.min.js'},
                {src: 'js/ScrollTrigger.min.js'},
            ],
        }
    }
})
