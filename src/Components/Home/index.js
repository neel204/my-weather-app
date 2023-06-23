import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { ThreeDots, InfinitySpin } from 'react-loader-spinner';

import Failure from '../Failure';
import Cards from '../Cards';

import './index.css';

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    userAddedPlaces: [],
    locationDetails: {},
    forecastDetails: [],
    userInputLocation: ''
  };

  onUserInput = (event) => {
    console.log(event.target.value);
    this.setState({ userInputLocation: event.target.value });
  };

  searchPlace = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });
    const { userInputLocation } = this.state;
    let userPlace = {
      days: 5,
      location: userInputLocation,
    };
    console.log(userPlace);
    const url = 'https://api.m3o.com/v1/weather/Forecast';
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer NzJjNTU1MmUtZDZhNi00MWZlLTg2MmItMGUyOWNmMzMzMDlm',
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
        const allForecastDetailsFormate = data.forecast.map((each) => each);
        console.log(locationDetailsFormate, allForecastDetailsFormate);
        // Update the forecast details in the component's state
        this.setState({ forecastDetails: allForecastDetailsFormate });
      } else {
        this.setState({ apiStatus: apiStatusConstants.failure });
      }
    } catch (error) {
      console.error(error);
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  addPlace = () => {
    const { userInputLocation, userAddedPlaces } = this.state;
    const newPlace = {
      id: uuidv4(),
      name: userInputLocation,
    };
    const updatedPlaces = [...userAddedPlaces, newPlace];
    this.setState({
      userAddedPlaces: updatedPlaces,
      userInputLocation: ''
    });
  };

  renderLoadingView = () => (
    <div className="products-loader-container">
      <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
  );

  renderAsPerApiStatus = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPrimeDealsList();
      case apiStatusConstants.failure:
        return <Failure />;
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <div className='small-screen'>
          <h3>Sorry, this website is not compatible with mobile devices. Please try accessing it from a desktop or laptop computer.</h3>
          <p>Apologies for the inconvenience. We are working on making our website mobile-friendly soon. Thank you for your patience and understanding.</p>
        </div>
        <div className='big-screen'>
          <div className='main-home-container'>
            <div className='container-1'>
              <div className='user-input-container'>
                <div className='input-container'>
                  <input type='text' placeholder='Enter Location' className='user-input' onChange={this.onUserInput} />
                  <button onClick={this.searchPlace} className='search-btn'>
                    <BsSearch />
                  </button>
                </div>
                <button type='button' className='add-btn' onClick={this.addPlace}>
                  <AiOutlinePlusCircle className='plus' />
                  Add
                </button>
              </div>
            </div>
            <div className='container-2'>
              <Failure />
              <ThreeDots color="#0b69ff" height="50" width="50" />
              <InfinitySpin width='200' color="#4c7694" />
            </div>
          </div>
          <div>
            <h3>Below are the forecasts for the next 5 days</h3>
          </div>
          <ul>
            <Cards allForecastDetailsFormate={this.state.forecastDetails} />
          </ul>
        </div>
      </>
    );
  }
}

export default Home;
