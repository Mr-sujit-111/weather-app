import React, { useEffect, useState } from 'react';
import ReadMoreTwoToneIcon from '@mui/icons-material/ReadMoreTwoTone';
import { Button } from '@mui/material';
import BodyCard from './BodyCard';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import WaterIcon from '@mui/icons-material/Water';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from 'styled-components';
import { tempData } from './Data/tempData';
import { useSelector } from 'react-redux'


function Body() {
    const [WeatherData, setWeatherData] = useState(tempData);
    const { data, status } = useSelector((state) => state.weatherData);

    useEffect(() => {
        if (status === "idle") {
            setWeatherData(data)
        }
    }, [status])


    const weather = [{
        index: 1,
        type: "Wind Speed",
        bigData: `${WeatherData.current.wind_kph}km/h`,
        smallData: `${WeatherData.current.wind_mph}m/h`,
        "weatherIcon": AirTwoToneIcon,
        "arrowIcon": ArrowDropDownIcon
    }, {
        index: 2,
        type: "Cloud percentage",
        bigData: `${WeatherData.current.cloud} `,
        smallData: `${WeatherData.current.cloud}%`,
        "weatherIcon": ThunderstormIcon,
        "arrowIcon": ArrowDropUpIcon
    }, {
        index: 3,
        type: "Pressure",
        bigData: `${WeatherData.current.pressure_mb}`,
        smallData: `${WeatherData.current.pressure_in}`,
        "weatherIcon": WaterIcon,
        "arrowIcon": ArrowDropUpIcon

    }, {
        index: 4,
        type: "Uv Index",
        bigData: `${WeatherData.current.uv}`,
        smallData: `${WeatherData.current.vis_miles} noi`,
        "weatherIcon": WbSunnyIcon,
        "arrowIcon": ArrowDropDownIcon

    }]

    return (
        <>
            <div className="body">
                <BodyHeader className="body__header">
                    <h4>
                        Today Overview
                    </h4>
                    <h4>
                        More Detail <Button><ReadMoreTwoToneIcon /></Button>
                    </h4>
                </BodyHeader>
                <div className="row">
                    {weather.map((dataItem, index) => {
                        const { weatherIcon, arrowIcon, type, bigData, smallData } = dataItem;
                        return <BodyCard key={index} WeatherIcon={weatherIcon} ArrowIcon={arrowIcon} Title={type} BigData={bigData} SmallData={smallData} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Body

const BodyHeader = styled.div`
display: flex;
justify-content: space-between;
margin-top: 5%;
`


