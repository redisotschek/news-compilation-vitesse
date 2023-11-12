import axios from 'axios'
import { News } from '~/types'

const baseURL = 'https://newsapi.org/v2/'
const apiKey = import.meta.env.VITE_NEWS_API_TOKEN
const http = axios.create({
    baseURL,
})
const requestParams = {
    params: {
        apiKey
    }
}

export async function getFeaturedNews(): Promise<News[]> {
    return (await http.get('top-headlines', {
        params: {
            ...requestParams.params,
            country: 'us',
        }
    })).data.articles
}


export async function getNews(): Promise<News[]> {
    return (await http.get('everything', {
        params: {
            ...requestParams.params,
            domains: 'techcrunch.com',
            sortBy: 'popularity'
        }
    })).data.articles
}
