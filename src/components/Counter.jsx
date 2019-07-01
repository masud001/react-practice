import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        imgAltText: "image name",
        imgUrl: "https://picsum.photos/200"
    }
    style = {
        fontSize:30,
        textTransform:"uppercase"
    }
    render() { 
        
        return (
            <React.Fragment>
                <img src={this.state.imgUrl} alt={this.state.imgAltText}/>
                <span style={this.style} className="m-2 p-2 badge badge-primary">{this.fonrmatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increments</button>
            </React.Fragment>
        );
    }
    fonrmatCount(){
        const {count} = this.state;
        return count === 0 ? <span>Zero</span> : count;
    }
}
 
export default Counter;