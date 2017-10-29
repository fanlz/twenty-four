import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumInput from './NumInput';
import expression from '../utils/expression';

class NumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numList: [3, 3, 6, 6],
            total: 24
        };
        this.handleClick = this.handleClick.bind(this);
        this.removeInput = this.removeInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addInput = this.addInput.bind(this);
    }
    handleClick() {
        const { getExpressions } = this.props;
        const { numList, total } = this.state;
        let tempList = numList.map(e => parseInt(e)).filter(e => e);
        let num = parseInt(total);

        if (tempList.length > 0 && num) {
            getExpressions(expression(tempList, num), num);
        }
    }
    handleChange(index, event) {
        let value = event.target.value;
        if (/^[0-9]+$/.test(value) || value === '') {
            if (index === -1) {
                this.setState({
                    total: value
                });
            } else {
                let tempList = this.state.numList.slice();
                tempList[index] = value;
                this.setState({
                    numList: tempList
                });
            }
        }
    }
    removeInput(index) {
        let tempList = this.state.numList.slice();
        tempList.splice(index, 1);
        this.setState({
            numList: tempList
        });
    }
    addInput() {
        let tempList = this.state.numList.slice();
        tempList.push('');
        this.setState({
            numList: tempList
        });
    }
    render() {
        const { numList, total } = this.state;
        return (
            <div>
                <div className="num-list">
                    <span>输入多个正整数</span>
                    {
                        numList.map((num, i)=> {
                            return <NumInput 
                                        key={i}
                                        value={num}
                                        index={i}
                                        handleChange={this.handleChange.bind(this, i)}
                                        removeItem={this.removeInput}/>
                        })
                    }
                    {numList.length < 6 ? <button onClick={this.addInput} className="add-input">+</button> : null}
                </div>
                <div className="num-list">
                    <span>输入最后的结果</span>
                    <NumInput handleChange={this.handleChange.bind(this, -1)} type="text" value={total} />
                </div>
                <div className="button-box">
                    <button 
                        disabled={!total}
                        className="calcul-button"
                        onClick={this.handleClick}
                        >点击计算</button>
                </div>
            </div>
        )
    }
}

NumList.propTypes = {
    getExpressions: PropTypes.func
};

export default NumList;