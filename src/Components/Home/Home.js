import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import FakeData from "../FakeData";
import TravelSpotData from '../TravelSpotData/TravelSpotData';
import './home.css'

const Home = () => {
    const [spots, setSpots] = useState(FakeData);
    const [spot, setSpot] = useState('');
    let primaryDisplaySpot;

    const handleSpot = (spot) => {
        setSpot(spot)
    }
    useEffect(()=>{
        setSpot(FakeData.[0])
    },[])
    // for (let i = 0; i < spots.length; i++){
    //     if ( spots[i].serial == 1 ) {
    //         let travelSpot = spots[i];
    //         console.log(travelSpot);
    //         travelSpot = primaryDisplaySpot;
    //         console.log(primaryDisplaySpot);
    //     }
    // }
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="spot-section">
                <div className="spot-description">
                    <h1>{spot.place}</h1>
                    <p>{spot.intro}</p>
                    <button className="booking-button">Book Now</button>
                </div>
                <div className="travel-spots">
                    {
                        spots.map(spot => <TravelSpotData spot={spot} key={spot.key} handleSpot={handleSpot}></TravelSpotData>)
                    }
                </div> 
            </div>
        </div>
    );
};

export default Home;