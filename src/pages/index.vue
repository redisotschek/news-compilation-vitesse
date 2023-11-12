<script setup lang="ts">
import { useNewsStore } from "~/stores/news";
const store = useNewsStore();

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "SPORTNEWS",
    },
    {
      name: "keywords",
      content: "vueye,template starter,vue.js,vue,vue3",
    },
    {
      name: "robots",
      content: "index,follow",
    },
    {
      hid: "og:title",
      name: "og:title",
      content: "SPORTNEWS",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: "Vue template",
    },
    {
      hid: "og:image",
      name: "og:image",
      content:
        "https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png",
    },
    {
      hid: "og:url",
      name: "og:url",
      content: "https://vueye.netlify.app/",
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Vueye",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Vueye",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "Vueye",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content:
        "https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@vueye",
    },
  ],
});
onMounted(() => {
  store.fetchFeaturedNews()
  store.fetchNews()
})
</script>

<template>
  <main
    class="relative landing-page z-10 flex flex-col items-center w-full h-full min-h-screen overflow-hidden bg-slate-50 dark:bg-primary-900 dark:text-white">

    <FeaturedNewsContainer class="py-24 bg-primary-800"/>
    <NewsContainer class="py-24 bg-white text-black"/>

  </main>
</template>
<style>

</style>
<route lang="yaml">
meta:
  layout: home
</route>
