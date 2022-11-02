import React, { useState } from 'react';
import ReactSlider from "react-slider";

const MonthlySlider =()=> {
    const [range, setRange] = useState('0');
    const [sliding, setSliding] = useState('')
    return(

        <div>

            <div className='slider-container'>
            <h3 className='slide-labels'>Monthly cost: {range}</h3>
             <div className='slider-value-left'>$1000</div>
                <ReactSlider
                className="customSlider"
                trackClassName="customSlider-track"
                thumbClassName="customSlider-thumb"
                onChange = {value => setRange(parseInt(value))}
                onSliderClick={()=> setSliding('Sliding')}
                onAfterChange={()=> setSliding('inactive')}
                step={0.01}
                min={1000}
                max={10000}
                value={0}
                />
             <div className='slider-value-right' id='slider-value-right-four'>$10,000</div>
            </div>

           
            
        </div>
        
           
        
    )
}

export default MonthlySlider;