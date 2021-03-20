import React from 'react';

const Extra = (props) => {
  const { style } = props;
  return (
    <div className={style.pdpArea}>
      <div className={`${style.teaserRoot} ${style.articleRoot}`}>
        <article className={style.article}>
          <a href='true' className={style.articleMedia}>
            <picture className={style.pictureRoot}>
              {/* <img src={}></img> */}
            </picture>
          </a>
          <div className={style.articleContent}>
            <h2 className={style.articleTitle}>Sustainability</h2>
            <div className={style.articleExcerpt}>
              This product uses Fjällräven G-1000, our own hardwearing outdoor fabric that together with timeless design, creates products that are able to stay in use for many, many years. That’s sustainability through longevity.
          </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Extra;