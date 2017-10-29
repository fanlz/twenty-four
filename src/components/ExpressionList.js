import React from 'react';
import PropTypes from 'prop-types';

const ExpressionList = ({ list }) => (
    <ul>
        {
            list.map((exp, i) => {
                return <li className="expression" key={i}>{exp}</li>
            })
        }
    </ul>
);

ExpressionList.propTypes = {
    list: PropTypes.array
};
export default ExpressionList;
