import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ridersData from '../../data/data.json';
import './Destination.css'

const Destination = () => {
    const {id} = useParams();
    const [newUser, setNewUser] = useState(false)
    const [pick, setPick] = useState({
        from: '',
        to: ''
    });
    const [rider, setRider] = useState([]);
    
    const result = rider && rider.filter(r => r.id == id);

    useEffect(() => {
        setRider(ridersData)
    },[]);

    const handleBlur = (e) => {
        e.preventDefault();
        let isFieldValid;
        if(e.target.name === 'from'){
            const idFromValid = e.target.value.length > 3;
            isFieldValid = idFromValid;
        }
        if(e.target.name === 'to'){
            const idToValid = e.target.value.length > 3;
            isFieldValid = idToValid;
        }
        if(isFieldValid){
            const newUserInfo = {...pick};
            newUserInfo[e.target.name] =e.target.value;
            setPick(newUserInfo);
          }
    };
    const handleSearch = (e) => {
      e.preventDefault();
        
    };
    return (
        <div>
            {newUser ? <div className="left-pick-from">
                
                <div className="pick-target">
                    <h1>{pick.from}</h1>
                    <h1>{pick.to}</h1>
                </div>
                <div className="pick-data">
                    <img src={result[0]?.img} alt=""/>
                    <p>{result[0]?.name}</p>
                    <p>4</p>
                    <p>$67</p>
                </div>
                <div className="pick-data">
                    <img src={result[0]?.img} alt=""/>
                    <p>{result[0]?.name}</p>
                    <p>4</p>
                    <p>$67</p>
                </div>
                <div className="pick-data">
                    <img src={result[0]?.img} alt=""/>
                    <p>{result[0]?.name}</p>
                    <p>4</p>
                    <p>$67</p>
                </div>
            </div> : 
            <form className="input-from" action="" onSubmit={handleSearch} >
            <p>Pick From</p>
            <input type="text" name="from" onBlur={handleBlur} placeholder="From"/>
            <p>Pick To</p>
            <input type="text" name="to" onBlur={handleBlur} placeholder="To"/>
            <br/>
            <input onClick={() => setNewUser(!newUser)} type="submit" value="Search"/>
        </form>
            }
            
        </div>
    );
};

export default Destination;