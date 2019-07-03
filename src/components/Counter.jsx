import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        tags: ["Item One","Item Two","Item Three","Item Four"],
        imgAltText: "image name",
        imgUrl: "https://picsum.photos/200"
    }
    style = {
        fontSize:18,
        textTransform:"uppercase"
    }
    render() { 
        
        return (
            <React.Fragment>
                <img src={this.state.imgUrl} alt={this.state.imgAltText}/>
                <span style={this.style} className={this.getBadgeClasses()}>{this.fonrmatCount()}</span>
                <button style={this.style} className="btn btn-secondary btn-sm">Increments</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "m-2 p-2 badge badge-";
        classes += (this.state.count === 0 ? "warning" : "primary");
        return classes;
    }

    fonrmatCount(){
        const {count} = this.state;
        return count === 0 ? <span>Zero</span> : count;
    }
}
 
export default Counter;