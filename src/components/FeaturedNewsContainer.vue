<script setup lang="ts">
import { useNewsStore } from '~/stores/news';
const { t } = useI18n();
const store = useNewsStore();
</script>
<template>
    <section class="w-full">
        <VSubheader :title="t('news.featured')" class="container mx-auto"></VSubheader>
        <div class="container mx-auto py-8">
            <swiper-container navigation="true" slides-per-view="3" >
                <swiper-slide v-for="news in store.featuredNews" :key="news.url">
                    <VFeaturedNewsCard  v-bind="news" />
                </swiper-slide>
            </swiper-container>
        </div>
    </section>
</template>