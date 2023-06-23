import React from 'react';
import './index.css';

const Cards = (props) => {
  const { allForecastDetailsFormate } = props;
  console.log(allForecastDetailsFormate)

  return (
    <div className="card-container">
      {allForecastDetailsFormate.map((forecast) => (
          <div className="card" key={forecast.date}>
          <div className="card-date">{forecast.date}</div>
          <div className="card-temp">
            <div>
              <h1>{forecast.avg_temp_c}<sup>o</sup></h1>
              <h1>{forecast.condition}</h1>
            </div>
          </div>
          <div className="details-container">
            <div className="detail">
              <div className="temp-info">
                <div>
                  <h1>Temp</h1>
                  <div>
                    <p>Max {forecast.max_temp_c}<sup>o</sup></p>
                    <p>Min {forecast.min_temp_c}<sup>o</sup></p>
                  </div>
                </div>
                <div>
                  <h1>Wind</h1>
                  <div>
                    <p>Max {forecast.max_wind_kph} KPH</p>
                    <p>Min {forecast.max_wind_mph} MPH</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="detail">
              <div className="rain-detail">
                <h1>Chances of Rain</h1>
                <p>{forecast.chance_of_rain}%</p>
              </div>
            </div>
            <hr />
            <div className="detail">
              <div className="sun-time-container">
                <div>
                  <h2>Sunrise</h2>
                  <p>{forecast.sunrise}</p>
                </div>
                <div>
                  <h2>Sunset</h2>
                  <p>{forecast.sunset}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
