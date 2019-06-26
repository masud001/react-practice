// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


class Person{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("Walk");
    }
}



class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher("masud", "Bachelor");

