import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <>
                  <button onClick={()=>this.handelClick("en-US")} className=" btn btn-dark text-capitalize">click me</button>
            </>
        )
    }
}
