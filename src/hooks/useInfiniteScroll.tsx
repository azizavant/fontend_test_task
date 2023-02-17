import {POST_INCREMENT, MAX_POSTS} from "../constants/constants";
import {useEffect, useState} from "react";

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(POST_INCREMENT)

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight || loading
        ) {
           return false
        }
        setLoading(true)
    }

    useEffect(() => {
        if (!loading) return

        if (count + POST_INCREMENT >= MAX_POSTS) {
            setCount(MAX_POSTS)
        } else {
            setCount(count + POST_INCREMENT)
        }

        setLoading(false)

    }, [loading])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { count }
}


