import './main.css';
import React from 'react';
import Slider from './serviceSlide'; 
import LeadSlider from './leadSlide';
import RateSlider from './rateSlide';
import MonthlySlider from './monthlySlide';

export default function Main (){
 
    return(
        <div className="scale-containers">
            <div className="scale-container-left">
                <div className='slider-parent'>
                    <Slider/> 
                    <LeadSlider/> 
                    <RateSlider/>   
                    <MonthlySlider/>
                </div>
            </div>
            <div className="scale-container-right">
                <h3>Cost of Services</h3>
                <h3>Cost per Lead</h3>
                <h3>Closing Rate</h3>
                <h3>Monthly Cost</h3>
                <h2>Projected Revenue</h2>

            </div>
        </div>
    )
}


//  const [value, setValue] = useState(1000);

//   const handleChange = (event) =>{
//     setValue(event.target.value);
//   }