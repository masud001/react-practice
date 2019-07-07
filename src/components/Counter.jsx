import React, { Component } from 'react'

class Counter extends Component {
    state = {
<<<<<<< HEAD
        count: 0,
        tags: ["Item One","Item Two","Item Three","Item Four"],
        imgAltText: "image name",
        imgUrl: "https://picsum.photos/200"
=======
        value: this.props.value
>>>>>>> compositcomponent
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
<<<<<<< HEAD
                <img src={this.state.imgUrl} alt={this.state.imgAltText}/>
                <span style={this.style} className={this.getBadgeClasses()}>{this.fonrmatCount()}</span>
                <button style={this.style} className="btn btn-secondary btn-sm">Increments</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
=======
                
                <span style={this.style} className={this.getBadgeClasses()}>{this.fonrmatCount()}</span>
                <button 
                style={this.style} 
                className="btn btn-secondary btn-sm"
                onClick={this.handelIncrement}>Increments</button> <br/>
                
>>>>>>> compositcomponent
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "m-2 p-2 badge badge-";
<<<<<<< HEAD
        classes += (this.state.count === 0 ? "warning" : "primary");
=======
        classes += (this.state.value === 0 ? "warning" : "primary");
>>>>>>> compositcomponent
        return classes;
    }

    fonrmatCount(){
        const {value: count} = this.state;
        return count === 0 ? <span>Zero</span> : count;
    }
}
 
export default Counter;