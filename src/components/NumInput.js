import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            removeShow: false
        };
    }
    render() {
        const { removeShow } = this.state;
        const { value, handleChange, removeItem, index } = this.props;
        return (
            <div 
                className="input-box"
                onMouseEnter={() => this.setState({removeShow: true})}
                onMouseLeave={() => this.setState({removeShow: false})}>
                <input
                    className="input-text" 
                    type="text" 
                    value={value}
                    onChange={(index) => handleChange(index)}
                     />
                {removeShow && removeItem ? <i onClick={() => removeItem(index)} className="remove-btn">x</i> : null}
            </div>
        )
    }
}

NumInput.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    handleChange: PropTypes.func,
    removeItem: PropTypes.func,
    index: PropTypes.number
};

export default NumInput;