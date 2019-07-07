import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.value
    }
    style = {
        fontSize:18,
        textTransform:"uppercase"
    }
    handelIncrement = () => {
        this.setState(
            {
                count: this.state.value + 1
            }
        )
    }
    render() { 
        console.log("props : ", this.props);
        return (
            <React.Fragment>
                
                <span style={this.style} className={this.getBadgeClasses()}>{this.fonrmatCount()}</span>
                <button 
                style={this.style} 
                className="btn btn-secondary btn-sm"
                onClick={this.handelIncrement}>Increments</button> <br/>
                
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "m-2 p-2 badge badge-";
        classes += (this.state.value === 0 ? "warning" : "primary");
        return classes;
    }

    fonrmatCount(){
        const {value: count} = this.state;
        return count === 0 ? <span>Zero</span> : count;
    }
}
 
export default Counter;