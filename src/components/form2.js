import React from 'react';

const Form2 = props => (
    <form onSubmit={props.weatherMethod2} className="formStyle">
        <input type="text" name="city" placeholder="enter city" />
        {/* <button>Get weather</button> */}
    </form>
    
)



export default Form2;