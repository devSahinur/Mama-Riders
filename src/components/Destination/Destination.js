import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PeopleIcon from '@material-ui/icons/People';
import { Map, GoogleApiWrapper } from 'google-maps-react';
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

    // google map styles
    const iframeStyle ={
        width: '850px',
        height: '600px',
        border: 'none',
        padding: '50px'
    }
      
    return (
        <div className="container">
            {newUser ? <div className="left-pick-from">
                
                <div className="pick-target">
                    <h1>{pick.from}</h1>
                    <h1>{pick.to}</h1>
                </div>
                <div className="pick-data">
                    <img src={result[0]?.img} alt=""/>
                    <p>{result[0]?.name}</p>
                    <p><PeopleIcon/> 4</p>
                    <p>$67</p>
                </div>
                <div className="pick-data">
                    <img src={result[0]?.img} alt=""/>
                    <p>{result[0]?.name}</p>
                    <p><PeopleIcon/>  4</p>
                    <p>$67</p>
                </div>
                <div className="pick-data">
                    <img src={result[0]?.img} alt=""/>
                    <p>{result[0]?.name}</p>
                    <p><PeopleIcon/>  4</p>
                    <p>$67</p>
                </div>
            </div> : 

            <form className="left-pick-from input-from" action="" onSubmit={handleSearch} >
            <p>Pick From</p>
            <input type="text" name="from" onBlur={handleBlur} required placeholder="From"/>
            <p>Pick To</p>
            <input type="text" name="to" onBlur={handleBlur} required placeholder="To"/>
            <br/>
            <input onClick={() => setNewUser(!newUser)} type="submit" required value="Search"/>
        </form>

        }
            <div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57494.63222574654!2d88.9751637338348!3d25.756868667760518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e349375b2cb363%3A0xed9c71a89e858559!2sTaraganj%20Upazila!5e0!3m2!1sen!2sbd!4v1617015607661!5m2!1sen!2sbd" style={iframeStyle} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Destination;