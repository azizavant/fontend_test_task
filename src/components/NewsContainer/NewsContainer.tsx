import React, {useEffect} from 'react';
import s from './NewsContainer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {getNewsIDsTC} from "../../store/newsPage-reducer";
import {News} from "./News/News";
import {useInfiniteScroll} from "../../hooks/useInfiniteScroll";

export const NewsContainer = () => {
    const newsIDs = useSelector<AppRootStateType, any>(state => state.newsPageData.newsIDs);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getNewsIDsTC())
    }, [])


    const newNewsIDs = newsIDs.slice(0, 20)

    return (
        <div>
            <section className={s.section}>
                <h1>Recent Top News</h1>
                <div className={s.post}>
                    {newNewsIDs.map((singleNewsId: number) => <News key={singleNewsId} singleNewsId={singleNewsId}/>)}
                </div>
            </section>
        </div>
    );
};

