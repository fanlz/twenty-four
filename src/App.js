import React, { Component } from 'react';
import ExpressionList from './components/ExpressionList';
import NumList from './components/NumList';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expressions: []
        };
        this.getExpressions = this.getExpressions.bind(this);
    }
    getExpressions(list) {
        this.setState({
            expressions: list
        });
    }
    render() {
        const { expressions } = this.state;
        return (
            <div>
                <h2>计算24点</h2>
                <p>在下列输入框中输入任意多个正整数，点击计算，利用加，减，乘，除，括号这几个运算符，得到所有由这4个数字计算出24的表达式</p>
                <NumList getExpressions={this.getExpressions} />
                <ExpressionList list={expressions} />
            </div>
        )
    }
}

export default App;
