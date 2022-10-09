import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className = "weather">
            <div className = "top">
                <div>
                    <p className = "city">New York</p>
                    <p className = "weather-description">Sunny</p>
                </div>
            </div>
            <img alt="weather" className="weather-icon" src="icons/01d.png"/>
        </div>
    );
}

export default CurrentWeather;