import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: '',
            body:'',
             
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body:this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type':'aplication/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
        .then(data=>console.log(data))
    }

    
    render() {
        return (
            <div>
                <h1>Add posts</h1>
                <form onSubmit={ this.onSubmit}>
                    <div className="forms">
                    <label htmlFor="title">Title</label> <br/>
                        <input onChange={ this.onChange} type="text" name="title" id="title" value={ this.state.title}/>
                </div>
                <div className="forms">
                    <label htmlFor="body">Title</label> <br/>
                        <textarea onChange={ this.onChange} name="body" id="body" cols="30" rows="10" value={this.state.body}></textarea>
                </div>
                <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;