
export const selectFields = ({id, by, url, time, title, score, kids, descendants}: any = {}) => ({
    id,
    by,
    url,
    time,
    title,
    score,
    kids,
    descendants
})


export const selectCommentFields = ({id, by, parent, time, text, type}: any = {}) => ({
    id,
    by,
    parent,
    time,
    text,
    type
})