import React from 'react';

const Form3 = props => (
    <form onSubmit={props.weatherMethod3} className="formStyle">
        <input type="text" name="city" placeholder="enter city" />
        {/* <button>Get weather</button> */}
    </form>
    
)



export default Form3;