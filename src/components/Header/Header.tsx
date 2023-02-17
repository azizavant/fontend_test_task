import React from 'react';
import s from "../NewsContainer/NewsContainer.module.css";

export const Header = () => {
    return (
        <section className={s.section}>
            <form autoComplete='off'>
                <input className={s.input}
                       type="text"
                       name='search'
                       id='sear'
                       placeholder='Search for something'
                />
                <button className={s.button}>Search</button>
            </form>
        </section>
    );
};

