import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProcessBar from './ProcessBar';
import { tempData } from '../Data/tempData';
import { useSelector } from 'react-redux'

function SidebarBody() {
    const { data, status } = useSelector((state) => state.weatherData);
    const style = {
        paddingBottom: "6%"
    }
    const [WeatherData, setWeatherData] = useState(tempData);
    useEffect(() => {
        if (status === "idle") {
            setWeatherData(data)
        }
    }, [status, data])

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <>
            <div className="col" >
                <IconConatiner className="display-flex">
                    {Object.keys(WeatherData).length > 0 ? <img src={WeatherData.current.condition.icon} alt="" /> : <img src={WeatherData.current.condition.icon} alt="" />}
                </IconConatiner>
            </div>
            <div className="row" style={style}>
                <div className="col-sm-6 display-flex">
                    <h1>{Object.keys(WeatherData).length > 0 ? `${WeatherData.current.temp_c}° C` : '30° C'}</h1>
                </div>
                <div className="col-sm-6 weather_type display-flex">
                    <WeatherStatus className="weather__status">{Object.keys(WeatherData).length > 0 ? WeatherData.current.condition.text : 'Dramatic Cloudy'}</WeatherStatus>
                </div>
            </div>
            <hr style={{ height: "2px", margin: "0 10%", opacity: 0.9, borderWidth: 0, color: "white", backgroundColor: "white" }}></hr>
            <Process>
                <div className="process__heading" >
                    <h3>Chances of rain</h3>
                </div>
                <div className="process">
                    <ProcessBar time="7 PM" percentage={status === "idle" ? randomIntFromInterval(10, 100) : "40"} />
                    <ProcessBar time="8 PM" percentage={status === "idle" ? randomIntFromInterval(10, 100) : "37"} />
                    <ProcessBar time="9 PM" percentage={status === "idle" ? randomIntFromInterval(10, 100) : "55"} />
                    <ProcessBar time="10 PM" percentage={status === "idle" ? randomIntFromInterval(10, 100) : "20"} />
                </div>
            </Process>
        </>
    )
}

export default SidebarBody

const IconConatiner = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 10%;
    padding: 21px 13px 0px 3px;
`

const Process = styled.div`
    .process__heading{
        display: flex;
    justify-content: center;
    margin-top: 6%;
    }
`
const WeatherStatus = styled.h3`
    text-transform: capitalize;
    margin-top: -10%;
`
