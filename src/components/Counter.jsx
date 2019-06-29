import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }
    render() { 
        return (
            <React.Fragment>
                <span className="mx-2 my-3">{this.state.count}</span>
                <button className="btn-primary">Increments</button>
            </React.Fragment>
        );
    }
}
 
export default Counter;