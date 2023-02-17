import React, {memo, useEffect} from 'react';
import s from './News.module.css'
import {getPostId, getSingleNewsTC, NewsType} from "../../../store/newsPage-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {mapTime} from "../../../utils/mapper";
import {NavLink} from "react-router-dom";
import {FaRegComments, FaUserAlt} from "react-icons/fa";

type NewsPropsType = {
    singleNewsId: number
}

export const News = memo(({singleNewsId}: NewsPropsType) => {
    const dispatch = useDispatch<any>();
    const singleNews = useSelector<AppRootStateType, NewsType>(state => state.newsPageData.news[singleNewsId]);

    const getNewsPostById = () => {
        dispatch(getPostId(singleNewsId))
    }
    useEffect(() => {
        dispatch(getSingleNewsTC(singleNewsId))
    }, [singleNewsId])

    if (!singleNews) {
        return <h1 style={{"color": "white"}}>Data is loading .....</h1>
    }

    return (
        <div>
            <article className={s.cards}>
                <div>
                    <h2 className={s.h2}>
                        <NavLink onClick={() => getNewsPostById()}
                           className={s.title}
                           to={`post/${singleNews.id}`}
                           >
                            {singleNews.title}
                        </NavLink>
                    </h2>
                    <p className={s.item}>rating: {singleNews.score}</p>
                    <ul className={s.list}>
                        <li className={s.item}><FaUserAlt className={s.icon}/> {singleNews.by}</li>
                        <li className={s.item}><FaRegComments className={s.icon}/> {singleNews.descendants}</li>
                    </ul>
                    <p className={s.item}>posted {mapTime(singleNews.time)} ago</p>
                </div>
            </article>
        </div>
    );
});

