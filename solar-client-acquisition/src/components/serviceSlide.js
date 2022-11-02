import React, { useState } from 'react';
import ReactSlider from "react-slider";

const Slider =()=> {
    const [range, setRange] = useState('0');
    const [sliding, setSliding] = useState('')
    return(

        <div>
            <div className='slider-container'>
            <h3 className='slide-labels'>Cost of service: {range}</h3>
             <div className='slider-value-left' id='COS'>$1,000</div>
                <ReactSlider
                className='customSlider'
                trackClassName='customSlider-track'
                thumbClassName='customSlider-thumb'
                markClassName='customSlider-mark'
                onChange = {value => setRange(parseInt(value))}
                onSliderClick={()=> setSliding('Sliding')}
                onAfterChange={()=> setSliding({sliding})}
                step={0.01}
                min={1000}
                max={25000}
                value={0}
                // marks
                />
    
             <div className='slider-value-right' id='slider-value-right-one'>$25,000</div>

            </div>

            
        </div>
        
           
        
    )
}

export default Slider;


