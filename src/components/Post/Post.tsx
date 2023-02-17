import React from 'react';
import s from "./Post.module.css";
import {mapTime} from "../../utils/mapper";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {NewsType} from "../../store/newsPage-reducer";
import {Commentary} from "./Commentary/Commentary";

export const Post = () => {
    const postId = useSelector<AppRootStateType, number>(state => state.newsPageData.idOfSelectedPost);
    const post = useSelector<AppRootStateType, NewsType>(state => state.newsPageData.news[postId]);


    return (
        <article className={s.cards}>
            <div>
                <h2>{post.title}</h2>
                <ul>
                    <li>author: {post.by}</li>
                    <li><a href={post.url} target='_blank'>Read full article</a></li>
                </ul>
                <p>posted {mapTime(post.time)} ago</p>
                <p>comments: {post.descendants}</p>
            </div>
            {post.kids?.map((commentId) => <Commentary key={commentId} commentId={commentId}/>)}
        </article>
    );
};
