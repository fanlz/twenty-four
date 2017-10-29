import React, { Component } from 'react';
import ExpressionList from './components/ExpressionList';
import NumList from './components/NumList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expressions: [],
            total: 0
        };
        this.getExpressions = this.getExpressions.bind(this);
    }
    getExpressions(list, total) {
        this.setState({
            expressions: list,
            total: total
        });
    }
    render() {
        const { expressions, total } = this.state;
        return (
            <div>
                <h2>计算24点</h2>
                <p>在下列输入框中输入多个正整数，点击计算，利用加，减，乘，除，括号这几个运算符，得到所有由这几个数字计算出最后结果的表达式</p>
                <NumList getExpressions={this.getExpressions} />
                <ExpressionList list={expressions} total={total}/>
            </div>
        )
    }
}

export default App;
