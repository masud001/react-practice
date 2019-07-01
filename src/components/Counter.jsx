import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }
    render() { 
        return (
            <React.Fragment>
                <span className="mx-2 my-3">{this.fonrmatCount()}</span>
                <button className="btn btn-primary">Increments</button>
            </React.Fragment>
        );
    }
    fonrmatCount(){
        const {count} = this.state;
        return count === 0 ? <span>ZERO</span> : count;
    }
}
 
export default Counter;