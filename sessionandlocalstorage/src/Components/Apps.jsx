import React, { useState, useEffect } from 'react'

 const useStateWithLocalStorage = localStorageKey => {
        const [value, setValue] = useState(localStorage.getItem(localStorageKey) || ' ');
        useEffect(() => {
            localStorage.setItem(localStorageKey, value);
        }, [value]);
        
        return [value, setValue]
};
    

const Apps = () => {
    // const onChange = event => {
        //     localStorage.setItem("myValueInLocalStorage", event.target.value);
        //     setValue(event.target.value);
        // };
   
    const [value, setValue] =useStateWithLocalStorage("myValueInLocalStorage")
    const onChange = event => setValue(event.target.value);

    return (
        <div>
            <h1>Hello React with Local Storage!</h1>
            <input type="text" name="" id="" placeholder="placeholder" value={value} onChange={ onChange}/>
            <p>input value : { value}</p>
        </div>
    )
}

export default  Apps