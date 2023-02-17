import {Dispatch} from "redux";
import {commentAPI} from "../api/hhApi";
import {selectCommentFields} from "../utils/selectFields";

type ActionsType =
    | ReturnType<typeof setComment>

export type CommentType = {
    id: number
    by: string
    parent: number
    time: number
    text: string
    type: string
}

export type InitStateType = {
    comments: {[key: number]: CommentType}
}

export const commentsInitState: InitStateType = {
    comments: {},
}

//REDUCER LOGIC
export const commentReducer = (state:InitStateType = commentsInitState, action: ActionsType) => {
    switch (action.type) {
        case "SET_COMMENT": {
            state.comments[action.comment.id] = action.comment
            return {...state};
        }
        default:
            return state
    }
}


//ACTION CREATORS
export const setComment = (comment: CommentType) => ({
    type: "SET_COMMENT" as const, comment
})

//THUNK CREATORS
export const getCommentTC = (commentId: number) => async (dispatch: Dispatch) => {
    const comment = await commentAPI.getCommentById(commentId)
    console.log(comment);
    dispatch(setComment(comment && selectCommentFields(comment)))
}

