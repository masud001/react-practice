import React, { Component } from 'react'

class StateAndProps extends Component {
    render() {
        console.log('props from stateandprops : ',this.props)
        return (
            <React.Fragment>
                <h1>My Name is: <span className="btn btn-primary">{this.props.name }</span></h1>
                <h2>My Age is: <span className="badge bg-secondary">{this.props.age}</span> </h2>
                <h3>My Address is :{ this.props.address}</h3>
            </React.Fragment>
        )
    }
}

export default StateAndProps
