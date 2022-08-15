import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { City } from 'country-state-city';
import styled from 'styled-components';
import { tempData } from './Data/tempData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../app/weathrDataSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify/dist/core';

function Header() {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.weatherData);
    const [WeatherData, setWeatherData] = useState(tempData);

    const [searchCity, setSearchCity] = useState([]);
    const [inputValue, setinputValue] = useState('')
    const style = {
        marginTop: "1%",
        borderBottom: "1px solid #e3dada",
        padding: "30px 0px"

    }
    const alert = (msg) => toast.error(msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const allCities = City.getAllCities();

    const handleChange = (e) => {
        setinputValue(e.target.value)
        var IndianCIties = allCities.filter((item) => {
            if (item.countryCode === "IN")
                return item.name.toLowerCase().startsWith(e.target.value.toLowerCase());
            return IndianCIties
        })
        setSearchCity(IndianCIties);
    }
    const handleClick = (e) => {
        setinputValue(e.target.innerHTML)
        setSearchCity([])
        dispatch(fetchData(inputValue));
    }
    useEffect(() => {
        if (status === "idle") {
            setWeatherData(data)
        } else if (status === "error") {
            alert(`${inputValue} Weather data not found !`);
            setinputValue('');
        }
    }, [status, data])

    return (
        <>
            <HeaderContainer className="row" style={style}>
                <div className="col-sm-4">
                    <div className="date">
                        june 2022
                    </div>
                    <div className="time">
                        Thursday 30 june, 2022
                    </div>
                </div>
                <div className="col-sm-4">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="display-flex">
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Search Location Here" onChange={handleChange} variant="standard" value={inputValue} autoComplete="off" />
                        {searchCity.length > 0 && <OptionContainer className="live-search-list">
                            {searchCity.length > 0 ? searchCity.map((item, index) => {
                                return <p key={index} onClick={handleClick}>{item.name}</p>
                            }) :
                                <p>No Data Found</p>
                            }
                        </OptionContainer>}
                    </Box>
                </div>
            </HeaderContainer>
            <ToastContainer />
        </>
    )
}

export default Header

const OptionContainer = styled.div`
  color: white;
    position: absolute;
    top: 5.5rem;
    width: 21%;
    left: 0;
    border-radius: 10px;
    padding: 0.5rem;
    border: 2px solid #eee;
    z-index: 1;
    margin-left: 27%;
    background: #1976d2;
    >p{
        cursor: pointer;
        :hover{
            color: white;
            cursor: pointer;
            transform: rotate3d()
        }
    }
`
const HeaderContainer = styled.div`
    .date{
        font-size: 25px;
        font-weight: 12%;
        text-transform : capitalize;
    }
    .time{
        color: #7e8da5;;
    }
`

