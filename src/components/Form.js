import React from 'react';

const Form = props => (
    <form onSubmit={props.weatherMethod} className="formStyle">
        <input type="text" name="city" placeholder="enter city" />
        {/* <button>Get weather</button> */}
    </form>
    
)



export default Form;