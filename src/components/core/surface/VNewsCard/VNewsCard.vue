
import { routerKey } from 'vue-router';
<script setup lang="ts">
    import {toRelativeCalendar} from '~/utils/helpers';
    import {newsCardProps} from './newsCardProps';
    const props = defineProps(newsCardProps)
    const published = reactive(toRelativeCalendar(props.publishedAt));
</script>
<template>
    <a :href="props.url" target="_blank" class="news-card">
        <div class="news-card__image py-2">
            <img class="rounded-xl object-cover h-64 w-96" :src="props.urlToImage" :alt="props.title" />
        </div>
        <div class="news-card__title">
            <h3>{{ props.title }}</h3>
        </div>
        <div class="news-card__date">
            <p>{{ published }}</p>
        </div>
        <div class="news-card__description text-gray-400">
            <h6>{{ props.description }}</h6>
        </div>
    </a>
</template>

<style scoped>
.news-card {
    @apply flex flex-col justify-between h-full text-left cursor-pointer;
}

.news-card__image {
    @apply py-2;
}

.news-card__date {
    @apply capitalize text-xs text-gray-600;
}
</style>