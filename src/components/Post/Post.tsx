import React, {useEffect} from 'react';
import s from "./Post.module.css";
import {mapTime} from "../../utils/mapper";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {getSingleNewsTC, NewsType} from "../../store/newsPage-reducer";
import {Commentary} from "./Commentary/Commentary";
import {useParams} from "react-router-dom";
import {FaRegComments, FaUserAlt} from "react-icons/fa";

export const Post = () => {
    const postId = useSelector<AppRootStateType, number>(state => state.newsPageData.idOfSelectedPost);
    const post = useSelector<AppRootStateType, NewsType>(state => state.newsPageData.news[postId]);
    const dispatch = useDispatch<any>();
    const params =  useParams()

    useEffect(() => {
       if (!post && params.id) {
           dispatch(getSingleNewsTC(+params.id))
       }
    }, [])

    if (!post) {
        return <h1 style={{"color": "white"}}>Data is loading .....</h1>
    }
    return (
        <article className={s.cards}>
            <div>
                <h2>{post.title}</h2>
                <ul>
                    <li><FaUserAlt className={s.icon}/> {post.by}</li>
                    <li><a href={post.url} target='_blank'>Read full article</a></li>
                </ul>
                <p className={s.time}>posted {mapTime(post.time)} ago</p>
                <p><FaRegComments className={s.icon}/> {post.descendants}</p>
            </div>
            {post.kids?.map((commentId) => <Commentary key={commentId} commentId={commentId}/>)}
        </article>
    );
};
