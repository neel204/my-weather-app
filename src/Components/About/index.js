import './index.css'

const About = () => (
    <div className='about'>
        <h3 className='about-heading'>About: </h3>
        <p className='about-para'>
            Welcome to Weather-By, your ultimate online destination for weather forecasts 
            and meteorological data. Our web application offers a comprehensive set of 
            features to help you stay informed about the weather conditions in your 
            area and beyond.
        </p>
        <h4 className='sub-heading'>Key Features:</h4>
        <ol className='key-features'>
            <li className='feature'>
                Accurate Weather Forecasts: Get access to precise and reliable weather 
                forecasts tailored to your location. We utilize advanced meteorological 
                algorithms and data sources to provide up-to-date information on temperature, 
                precipitation, wind speed, humidity, and more.
            </li>
            <li className='feature'>
                Hourly and Daily Forecasts: Plan your activities effectively with our detailed 
                hourly and daily forecasts. We present you with essential weather information, 
                including temperature trends, precipitation chances, wind direction, and atmospheric 
                pressure, so you can make informed decisions.
            </li>
            <li className='feature'>
                Customizable Dashboard: Create a personalized weather dashboard to monitor your preferred 
                locations. Add multiple cities, save your settings, and easily switch between locations 
                to view weather information for various areas, whether it's your current location, hometown, 
                or travel destinations
            </li>
            <li className='feature'>
                Weather Alerts and Notifications: Stay updated on severe weather events with our timely alerts 
                and notifications. Receive warnings for thunderstorms, hurricanes, heavy rainfall, or other 
                significant weather phenomena in your area, ensuring your safety and preparedness.
            </li>
        </ol>
        <p className='about-para'>
            At Weather-By, we are committed to providing an intuitive and user-friendly weather experience. 
            Our web application is designed to be responsive and accessible across devices, allowing you to 
            access weather information anytime, anywhere.
        </p>
        <p className='about-para'>
            We value your feedback and suggestions as we continuously enhance our web application to meet 
            your weather needs. If you have any questions or comments, please reach out to our support team, 
            who are dedicated to ensuring your satisfaction.
        </p>
        <p className='about-para'>
            Experience the power of accurate weather information with [Web Application Name]. Start exploring 
            weather forecasts, planning your activities, and staying ahead of the elements. Stay informed, stay 
            prepared, and make the most of every day!
        </p>
    </div>
)

export default About