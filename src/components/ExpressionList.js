import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpressionList extends Component {
    render() {
        const { name } = this.props;
        return <h1>hello, {name}</h1>
    }
}

ExpressionList.propTypes = {
    name: PropTypes.string
}

export default ExpressionList;