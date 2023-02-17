import {Dispatch} from "redux";
import {newsPageAPI} from "../api/hhApi";
import {selectFields} from "../utils/selectFields";

type ActionsType =
    | ReturnType<typeof setSingleNews>
    | ReturnType<typeof setNewsIDs>
    | ReturnType<typeof getPostId>

export type NewsType = {
    id: number
    by: string
    url: string
    time: number
    title: string
    score: number
    kids: number[] | undefined
    descendants: number
}

export type InitStateType = {
    news: {[key: number]: NewsType}
    newsIDs: number[]
    idOfSelectedPost: number
}

export type NewsStateType = {
    [key: number]: NewsType
}

export const newsInitState: InitStateType = {
    news: {},
    newsIDs: [],
    idOfSelectedPost: 0
}

//REDUCER LOGIC
export const newsPageReducer = (state:InitStateType = newsInitState, action: ActionsType) => {
    switch (action.type) {
        case "SET_SINGLE_NEWS": {
            state.news[action.singleNews.id] = action.singleNews
            return {...state};
        }
        case 'SET_NEWS_IDS': {
            return {
                ...state,
                newsIDs: action.newsIDs
            }
        }
        case 'GET_ID_OF_SELECTED_ELEMENT': {
            return {
                ...state, idOfSelectedPost: action.postId
            }
        }
        default:
            return state
    }
}

//ACTION CREATORS
export const setSingleNews = (singleNews: NewsType) => ({
    type: "SET_SINGLE_NEWS" as const, singleNews
})

export const setNewsIDs = (newsIDs: number[]) => ({
    type: "SET_NEWS_IDS" as const, newsIDs
})

export const getPostId = (postId: number) => ({
    type: "GET_ID_OF_SELECTED_ELEMENT" as const, postId
})

//THUNK CREATORS
export const getSingleNewsTC = (singleNewsId: number) => async (dispatch: Dispatch) => {
    const singleNews = await newsPageAPI.getSingleNews(singleNewsId)
    dispatch(setSingleNews(singleNews && selectFields(singleNews)))
}


export const getNewsIDsTC = () => async (dispatch: Dispatch) => {
    const newsIDs = await newsPageAPI.getNewsIDs()
    dispatch(setNewsIDs(newsIDs))
}