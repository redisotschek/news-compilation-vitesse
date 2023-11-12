<script setup lang="ts">
    import { useNewsStore } from '~/stores/news';
    const { t } = useI18n();
    const store = useNewsStore();
</script>
<template>
    <section class="w-full">
        <VSubheader :title="t('news.name')" class="container mx-auto"></VSubheader>
        <div class="news-container">
            <VNewsCard v-for="(news, index) in store.allNews"  :class="{'giga-card': index === 0}" class="col-span-1" :key="news.title" v-bind="news" />
        </div>
    </section>
</template>
<style scoped>
.news-container{
    @apply container mx-auto grid py-8 grid-cols-4 gap-x-5 gap-y-10;
}

.giga-card{
    @apply col-span-2 relative;
}

.giga-card :deep(img) {
    @apply w-full h-full;
}

.giga-card :deep(.news-card__description) {
    @apply hidden;
}

.giga-card :deep(.news-card__title), .giga-card :deep(.news-card__date) {
    @apply absolute bottom-8 text-white mx-8;
}

.giga-card :deep(.news-card__title) {
    @apply my-8;
}
</style>