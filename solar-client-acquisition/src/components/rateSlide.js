import React, { useState } from 'react';
import ReactSlider from "react-slider";

const RateSlider =()=> {
    const [range, setRange] = useState('0');
    const [sliding, setSliding] = useState('')
    return(

        <div>

            <div className='slider-container'>
            <h3 className='slide-labels'>Closing rate: {range}</h3>
             <div className='slider-value-left'>0%</div>
                <ReactSlider
                className="customSlider"
                trackClassName="customSlider-track"
                thumbClassName="customSlider-thumb"
                onChange = {value => setRange(parseInt(value))}
                onSliderClick={()=> setSliding('Sliding')}
                onAfterChange={()=> setSliding('inactive')}
                step={0.01}
                min={0}
                max={100}
                value={0}
                />
             <div className='slider-value-right' id='slider-value-right-two'>100%</div>

            </div>

           
            
        </div>
        
           
        
    )
}

export default RateSlider;