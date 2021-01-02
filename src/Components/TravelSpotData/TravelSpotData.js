import React, { useState } from 'react';
import './TravelSpotData.css'

const TravelSpotData = (props) => {
    const {place, key, serial, intro, fullIntro, img} = props.spot;
    const handleSpot = props.handleSpot;
    
    
    return (
        <div className="travel-card" onClick={() => handleSpot(props.spot)}>
            <div className="spot-img">
                <img src={img} alt=""/>
            </div>
            <div className="spot-name">
                <h2>{place}</h2>
            </div>
        </div>
    );
};

export default TravelSpotData;