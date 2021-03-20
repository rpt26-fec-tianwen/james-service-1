import React from 'react';

const ProductDetails = (props) => {
  const { currentComponentDetails, style } = props;
  return currentComponentDetails ?
    (
      <div className={style.teaserRoot}>
        <span className={style.featuresTitle}>
          Details
       </span>

        <span className={style.shortDescription}>
          {currentComponentDetails}
         </span>
      </div>
    ) : null
}

export default ProductDetails;