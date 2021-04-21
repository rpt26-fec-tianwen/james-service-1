import React from 'react';

const MaterialSpecification = (props) => {
    const { style, currentComponentDetails, material_specification, careInstructions, descriptor, selector } = props;
    const { teaserRoot, descriptionRoot, materialSpecification, descriptionTitle, descriptionContent, description, descriptionText, descriptionItem, descriptionItemLabel } = style;
    return (
        <div id={style[materialSpecification]} className={`${teaserRoot} ${descriptionRoot}`}>
            <span className={descriptionTitle}>Material Specification</span>
            <div className={descriptionContent}>
                <div className={description}>
                    <p className={descriptionText}>
                        {
                            currentComponentDetails.map((item, index) => {
                                const value = Object.values(item)[0];
                                let title = Object.keys(item)[0];
                                if (title !== undefined) {
                                    title = title.replace(/_/g, " ");
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
                            })
                        }
                    </p>
                </div>
            </div>
        </div >

    )
}

export default MaterialSpecification;