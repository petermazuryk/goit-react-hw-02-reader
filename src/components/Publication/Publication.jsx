import React from 'react';
import style from './Publication.module.css';

const Publication = ({ publications, textNum }) => {
  return (
    <div>
      <article className={style.publication} key={publications[textNum].id}>
        <h2 className={style.title}>{publications[textNum].title}</h2>
        <p className={style.text}>{publications[textNum].text}</p>
      </article>
    </div>
  );
};

export default Publication;
