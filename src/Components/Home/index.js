import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {v4 as uuidv4} from 'uuid'
import Loader from 'react-loader-spinner'

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
        this.setState({ apiStatus: apiStatusConstants.inProgress });
        const { userInputLocation } = this.state;
        let userPlace = {
          days: 5,
          location: userInputLocation,
        };
        console.log(userPlace);
        const url = "https://api.m3o.com/v1/weather/Forecast";
        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer NzJjNTU1MmUtZDZhNi00MWZlLTg2MmItMGUyOWNmMzMzMDlm",
          },
          body: JSON.stringify(userPlace),
        };
        console.log(option);
      
        try {
          const response = await fetch(url, option);
          if (response.ok === true) {
            this.setState({ apiStatus: apiStatusConstants.success });
            const data = await response.json();
            const locationDetailsFormate = {
              location: data.location,
              region: data.region,
              country: data.country,
              latitude: data.latitude,
              longitude: data.longitude,
              timezone: data.timezone,
              localTime: data.local_time,
            };
            const allforcaseDetailsFormate = data.forecast.map((each) => each);
            const eachFromatted = allforcaseDetailsFormate.map((i) => ({
              date: i.date,
              maxTempC: i.max_temp_c,
              maxTempF: i.max_temp_f,
              minTempC: i.min_temp_c,
              minTempF: i.min_temp_f,
              avgTempC: i.avg_temp_c,
              avgTempF: i.avg_temp_f,
              willItRain: i.will_it_rain,
              chanceOfRain: i.chance_of_rain,
              condition: i.condition,
              sunrise: i.sunrise,
              sunset: i.sunset,
              maxWindMph: i.max_wind_mph,
              maxWindKph: i.max_wind_kph,
            }));
      
            console.log(locationDetailsFormate, eachFromatted);
          } else {
            this.setState({ apiStatus: apiStatusConstants.failure });
          }
        } catch (error) {
          console.error(error);
          this.setState({ apiStatus: apiStatusConstants.failure });
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

    renderLoadingView = () => (
        <div className="products-loader-container">
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )
    
    renderAsPerApiStatus = () => {
        const {apiStatus} = this.state
        switch (apiStatus) {
            case apiStatusConstants.success:
              return this.renderPrimeDealsList()
            case apiStatusConstants.failure:
              return <Failure/>
            case apiStatusConstants.inProgress:
              return this.renderLoadingView()
            default:
              return null
          }
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