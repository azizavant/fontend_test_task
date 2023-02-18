import axios from 'axios';




const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0',
})

export const newsPageAPI = {
    getSingleNews: (singleNewsId: number) => {
        return instance.get(`/item/${singleNewsId.toString()}.json?print=pretty`).then(res => res.data)
    },
    getNewsIDs: () => {
        return instance.get('/topstories.json?print=pretty').then(res => res.data)
    }
}


export const commentAPI = {
    getCommentById: (commentId: number) => {
        return instance.get(`/item/${commentId.toString()}.json?print=pretty`).then(res => res.data)
    }
}


