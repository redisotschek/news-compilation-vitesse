export const featuredNewsCardProps = {
    title: {
        type: String,
        required: true
    },
    publishedAt: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    urlToImage: {
        type: String,
        required: true
    },
}

export const newsCardProps = {
    ...featuredNewsCardProps,
    description: {
        type: String,
    },
}