import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer>
            <h1 className={s.footer__logo}>HACKER NEWS</h1>

            <ul className={s.permalinks}>
                <li><a href="https://news.ycombinator.com/news" target='_blank'>Hacker News</a></li>
                <li><a href="https://firebase.google.com/">Firebase</a></li>
            </ul>

            <div className={s.footer__copyright}>
                <small>&copy; ALL rights reserved</small>
            </div>
        </footer>
    );
};

