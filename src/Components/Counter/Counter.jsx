import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:10
        }
        
    }
    // increase handler 
    increase = (e) => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    // decrease handler 
    decrease = (e) => {
        this.setState({
            count: this.state.count - 1,
        })
    }
    render() {
        let count = this.state.count;
        let className = count <= 0 ? "-danger" : "-secondary";
        return (
            <React.Fragment>

                <h1>State</h1>
                <hr />
                <span><button onClick={this.decrease } className="btn btn-primary">-</button></span>
                <span className={ `bg${className} p-2 mx-3 fs-1 text-white`}>{count}</span>
                <span><button onClick={this.increase} className="btn btn-primary">+</button></span>
            </React.Fragment>
        )
    }
}

export default Counter
