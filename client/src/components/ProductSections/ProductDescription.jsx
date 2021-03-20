import React from 'react';

const ProductDescription = (props) => {
  const { style, currentComponentDetails, material_specification, careInstructions, selector, descriptor } = props;

  const { teaserRoot, productDescription, descriptionRoot, descriptionTitle, descriptionContent, description, descriptionText, descriptionSpec, descriptionItem, descriptionItemLabel, descriptionInfo, materialSpecification } = style;

  return currentComponentDetails !== undefined ? (

    <div id={style[productDescription]} className={`${teaserRoot} ${descriptionRoot}`}>
      <span className={descriptionTitle}>Product Description</span>
      <div className={descriptionContent}>
        <div className={description}>
          <p className={descriptionText}>
            <span className={descriptionItem}>
              {currentComponentDetails[0][0].product_description}
              <br />
            </span>
          </p>
        </div>

        <div className={descriptionSpec}>
          <p className={descriptionText}>
            {
              currentComponentDetails[1].map((item, index, arr) => {
                const value = Object.values(item)[0];
                let title = Object.keys(item)[0];
                if (title !== undefined) {
                  title = title.replace(/_/g, ' ');
                  title = `${title[0].toUpperCase()}${title.slice(1)}: `;
                }
                return value !== undefined ?
                  (<span key={index} className={descriptionItem}>
                    <strong className={descriptionItemLabel}>
                      {`${title}`}
                    </strong>
                    {value}
                    <br />
                  </span>)
                  : null
              })}
          </p>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProductDescription;