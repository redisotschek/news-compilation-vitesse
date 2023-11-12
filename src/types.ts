import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void
export type NewsModule = (ctx: ViteSSGContext) => void

export type News = {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: Record<string, string>
    title: string,
    url: string,
    urlToImage: string,
}
