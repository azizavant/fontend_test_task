import React, {useEffect} from 'react';
import s from './Commentary.module.css'
import {mapTime} from '../../../utils/mapper';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from '../../../store/store';
import {CommentType, getCommentTC} from '../../../store/commentsOfPosts-reducer';
import userImage
    from '../../../assets/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.webp'

export const Commentary = ({commentId}: { commentId: number }) => {
    const dispatch = useDispatch<any>();
    const comment = useSelector<AppRootStateType, CommentType>(state => state.commentaries.comments[commentId]);

    useEffect(() => {
        dispatch(getCommentTC(commentId))
    }, [])

    if (!comment) {
        return <h1 style={{"color": "white"}}>Data is loading .....</h1>
    }

    return (
        <section className={s.cards}>
            <div className={s.imageDiv}>
                <img className={s.userImage} src={userImage} alt="image"/>
                <h2 className={s.user}>{comment.by}</h2>
            </div>
            <div className={s.mainDiv}>
                <p className={s.time}>posted {mapTime(comment.time)} ago</p>
                <h3 className={s.h3} dangerouslySetInnerHTML={{__html: comment.text}}></h3>
            </div>
        </section>
    );
};
