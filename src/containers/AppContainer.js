import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import CityResponse from '../components/CityResponse';
import City from '../components/City';
import MapContainer from '../components/MapContainer';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');

    const handleCityChange = async (cityValue) => {
        //console.log(`--------- fetchData called city:${cityValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityValue},nz`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <City onCityChange={handleCityChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-8">
                <div className="col-sm-2"></div>
                <MapContainer onCityChange={handleCityChange} responseData={responseData}/>
                <div className="col-sm-2"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <CityResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>
        </div>
    );
}
  
export default AppContainer
