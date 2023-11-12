import { acceptHMRUpdate, defineStore } from 'pinia'
import { getFeaturedNews, getNews } from '~/modules/api'
import { News } from '~/types'


export const useNewsStore = defineStore('news', () => {

    const featuredNewsRef = ref([] as News[])
    const allNewsRef = ref([] as News[])

    const allNews = computed(() => allNewsRef.value.filter(e => e.urlToImage))
    const featuredNews = computed(() => featuredNewsRef.value.filter(e => e.urlToImage))

    async function fetchFeaturedNews(): Promise<void> {
        const res = await getFeaturedNews()
        featuredNewsRef.value = res
    }

    async function fetchNews(): Promise<void> {
        const res = await getNews()
        allNewsRef.value = res
    }

    return {
        featuredNews,
        allNews,
        fetchFeaturedNews,
        fetchNews,
    }
})


if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot))
