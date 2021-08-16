import React, { Component } from 'react'

export default class Clock extends Component {
   
        state = {date: new Date(),locale:"bn-BD"}
   
    componentDidMount() {
        this.clearTime = setInterval(()=> this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.clearTime)
    }

    handelClick(locale) {
       
        this.setState({
            locale
        })
        console.log("this is clicked")
    }

    tick() {
        this.setState({
                date:new Date()
            })
    }

   


    render() {
        const { date,locale } = this.state
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Hello <span className=" badge bg-danger">React </span></h1>
                    <h1>Today's Date is :
                        <span className=" badge bg-dark ">
                            {date.toLocaleTimeString(locale)}
                        </span>
                    </h1>
                  
				</div>
            </React.Fragment>
        )
    }
}

