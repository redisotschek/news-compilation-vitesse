<script setup lang="ts">
    import {toRelativeCalendar} from '~/utils/helpers';
    import { featuredNewsCardProps } from './newsCardProps';

    const props = defineProps(featuredNewsCardProps)

    const published = reactive(toRelativeCalendar(props.publishedAt));
</script>
<template>
    <a :href="props.url" target="_blank" class="news-card">
        <div class="news-card__image py-2">
            <img :src="props.urlToImage" :alt="props.title" />
        </div>
        <div class="news-card__title py-2">
            <h3>{{ props.title }}</h3>
        </div>
        <div class="news-card__date capitalize text-gray-600">
            <p>{{ published }}</p>
        </div>
    </a>
</template>
<style scoped>
.news-card{
    @apply flex flex-col justify-between h-full text-left;
}
img {
    @apply rounded-xl object-cover h-64 w-96;
}
</style>
