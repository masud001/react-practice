import React, { Component } from 'react'

export default class Clock extends Component {
   
    state = {date: new Date()}
    componentDidMount() {
        this.clearTime = setInterval(()=> this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.clearTime)
    }

    tick() {
        this.setState({
                date:new Date()
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
						<h1>Hello <span className=" badge bg-danger">React </span></h1>
						<h1>Today's Date is :
                            <span className=" badge bg-dark ">
                                {this.state.date.toLocaleTimeString(this.props.locale)}
                            </span>
 					    </h1>
				</div>
            </React.Fragment>
        )
    }
}

