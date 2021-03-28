import React, { useEffect, useState } from 'react';
import ridersData from '../../data/data.json';
import SingleData from '../SingleData/SingleData';
import './Home.css'


const Home = () => {
    const [riders, setRiders] = useState([]);
    
    useEffect(() =>{
        setRiders(ridersData)
    },[])
    return (
        <div className="single-container container ">
            {
                riders.map( rider => <SingleData key={rider.id} rider={rider}></SingleData>)
            }
        </div>
    );
};

export default Home;