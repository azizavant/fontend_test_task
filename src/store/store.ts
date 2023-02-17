import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsPageReducer} from "./newsPage-reducer";
import thunk from 'redux-thunk'
import {commentReducer} from "./commentsOfPosts-reducer";

const rootReducer = combineReducers({
    newsPageData: newsPageReducer,
    commentaries: commentReducer
})

export const store = createStore(rootReducer ,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store