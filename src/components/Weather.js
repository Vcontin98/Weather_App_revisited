import React from 'react';

const Weather = props => 
( 
    <div className="weatherInfoStyle">
        {props.city &&  
            <div>
                <p className="temp">{Math.floor(props.temp)}&deg;</p>
                <p>&nbsp; {props.city}</p>
                <p>Pressure:&nbsp; {Math.floor(props.pressure)} Pa</p>
                <p>Wind:&nbsp; {Math.floor(props.wind)} mph</p> 
                
            </div> 
        }
                <p className="error">{props.error}</p>

    </div>
)

export default Weather;