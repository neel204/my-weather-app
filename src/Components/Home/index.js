import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {v4 as uuidv4} from 'uuid'

import Failure from '../Failure'
import Cards from '../Cards'

import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}

/*
let userAddedPlaces = [
    {
        id: uuidv4(),
        name: 'Mumbai'
    },
    {
        id: uuidv4(),
        name: 'Delhi'
    },
    {
        id: uuidv4(),
        name: 'Bangalore'
    },
    {
        id: uuidv4(),
        name: 'Chennai'
    },
    {
        id: uuidv4(),
        name: 'Hyderabad'
    }
]
*/

class Home extends Component{
    state = {
        apiStatus: apiStatusConstants.initial,
        userAddedPlaces: [],
        locationDetails: {},
        forcaseDetails:[],
        userInputLocation: ''
    }

    onUserInput = (event) => {
        console.log(event.target.value)
        this.setState({userInputLocation: event.target.value})
    }

    searchPlace = async () => {
        this.setState(apiStatusConstants.inProgress)
        const userInputLocation = this.state
        let userPlace = {
            days : 5,
            location: userInputLocation,
        };
        const url = "https://api.m3o.com/v1/weather/Forecast";
        const option = {
            method: "POST",  
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer NzJjNTU1MmUtZDZhNi00MWZlLTg2MmItMGUyOWNmMzMzMDlm"
            },
            body : JSON.stringify(userPlace)
        };

        const response = await fetch(url, option)
        if (response.ok === true){
            const data = await response.json()
            const locationDetailsFormate = data.map(eachInfo => ({
                location: eachInfo.location,
                region: eachInfo.region,
                country: eachInfo.country,
                latitude: eachInfo.latitude,
                longitude: eachInfo.longitude,
                timezone: eachInfo.timezone,
                localTime: eachInfo.local_time,
            }))
            const forcaseDetailsFormate = data.forecast.map
        }
    }    

    addPlace = () => {
        const { userInputLocation, userAddedPlaces } = this.state;
        const newPlace = {
            id: uuidv4(),
            name: userInputLocation
        };
        const updatedPlaces = [...userAddedPlaces, newPlace];
        this.setState({
            userAddedPlaces: updatedPlaces,
            userInputLocation: ''
        });
    }
    

    render(){
        return(
            <div className=''>
                <div className='main-home-container'>
                    <div className='container-1'>
                        <div className='user-input-container'>
                            <div className='input-container'>
                                <input type='text' placeholder='Enter Location' className='user-input' onChange={this.onUserInput}/>
                                <button onClick={this.searchPlace} className='search-btn'>
                                    <BsSearch/>
                                </button>
                            </div>
                            <button type='button' className='add-btn' onClick={this.addPlace}>
                                <AiOutlinePlusCircle className='plus'/>
                                Add
                            </button>
                        </div>
                    </div>
                    <div className='container-2'>
                        <Failure/>
                    </div>
                </div>
                <div>
                    <h3>Belower are Forecast of next 5 Days</h3>
                </div>
                <Cards/>
            </div>
        )
    }
}

export default Home