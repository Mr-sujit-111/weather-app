import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { tempData } from '../Data/tempData';

function SidebarHeader() {
    const { data, status } = useSelector((state) => state.weatherData);
    const style = {
        display: "flex",
        justifyContent: "space-between"
    }
    const [WeatherData, setWeatherData] = useState(tempData);
    useEffect(() => {
        if (status === "idle") {
            setWeatherData(data)
        }
    }, [status])

    var dt = new Date();
    var hours = dt.getHours(); // gives the value in 24 hours format
    var minutes = dt.getMinutes();


    return (
        <>
            <SidebarTitle>
                <div style={style}>
                    <h3>

                        {Object.keys(WeatherData).length > 0 ? WeatherData.location.name : "Surat"}, {Object.keys(WeatherData).length > 0 ? WeatherData.location.region : "Gujarat"}
                        <div>
                            <span>{Object.keys(WeatherData).length > 0 ? WeatherData.location.country : "India"}</span>
                        </div>
                    </h3>
                    <div>
                        {
                            Object.keys(WeatherData).length > 0 ? WeatherData.location.localtime.slice(11, 16) + " AM" : "12:30"
                            // Object.keys(WeatherData).length > 0 ? WeatherData.location.localtime.slice(11, 16) +" AM" : "12:30"
                        }
                    </div>
                </div>
            </SidebarTitle>
        </>
    )
}

export default SidebarHeader

const SidebarTitle = styled.div`
    padding: 6%;
`