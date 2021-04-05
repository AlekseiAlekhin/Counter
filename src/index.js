import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.clickPlus = this.clickPlus.bind(this);
        this.clickMinus = this.clickMinus.bind(this);
    }
    clickPlus(){
        this.setState(state => ({
            count: ++state.count
        }))
    }
    clickMinus(){
        this.setState(state => ({
            count: --state.count
        }))
    }

    render(){
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickMinus}>-</button>
                <button onClick={this.clickPlus}>+</button>

            </>
        )
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);