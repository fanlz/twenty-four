import React from 'react';
import PropTypes from 'prop-types';

const ExpressionList = ({ list, total }) => (
    <div>
        <ul>
            {
                list.slice(0, 500).map((exp, i) => {
                    return <li className="expression" key={i}>{exp}={total}</li>
                })
            }
            {list.length > 500 && <h3>...</h3>}
        </ul>
        {!list.length && total > 0 ? <h3 className="noanswer">无解</h3> : null}
    </div>
);

ExpressionList.propTypes = {
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
};
export default ExpressionList;
