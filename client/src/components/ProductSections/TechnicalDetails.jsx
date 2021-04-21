import React from 'react';

const TechnicalDetails = (props) => {
    const { style, currentComponentDetails, material_specification, careInstructions, descriptor, selector } = props;
    const { technicalDetails, materialSpecification, teaserRoot, descriptionRoot, descriptionTitle, descriptionContent, description, descriptionText, descriptionSpec, descriptionItem, descriptionItemLabel, descriptionInfo } = style;
    return (
        <div id={style[technicalDetails]} className={`${teaserRoot} ${descriptionRoot}`}>
            <span className={descriptionTitle}>Technical Details</span>
            <div className={descriptionContent}>
                <div className={description}>
                    <p className={descriptionText}>
                        {
                            currentComponentDetails[0].map((item, index) => {
                                const value = Object.values(item)[0];
                                let title = Object.keys(item)[0];
                                if (title !== undefined) {
                                    title = title.replace(/_/g, ' ');
                                    title = `${title[0].toUpperCase()}${title.slice(1)}: `;
                                }
                                return value !== undefined ?
                                    (
                                        <span key={index} className={descriptionItem}>
                                            <strong className={descriptionItemLabel}>
                                                {`${title}`}
                                            </strong>
                                            {value}
                                            <br />
                                        </span>
                                    ) : null;
                            })
                        }

                    </p>
                </div>

                <div className={descriptionSpec}>
                    <p className={descriptionText}>
                        {
                            currentComponentDetails[1].map((item, index, arr) => {
                                // if (selector === 'product description') {
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
                                // }
                            })}
                    </p>
                </div>
            </div >
        </div>
    )
}

export default TechnicalDetails;