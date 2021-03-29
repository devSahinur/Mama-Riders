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
    const mapStyles = {
        width: '100%',
        height: '100%',
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

        {/* google map */}
        {/* <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        /> */}

        </div>
    );
};

export default Destination;