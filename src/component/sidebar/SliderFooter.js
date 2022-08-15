import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import FooterBox from './FooterBox';
// import { WeatherData } from '../Data/WeatherData';
import { useSelector } from 'react-redux'
import { tempData } from '../Data/tempData';

function SliderFooter() {
  const { data, status } = useSelector((state) => state.weatherData);

  const [WeatherData, setWeatherData] = useState(tempData);
  useEffect(() => {
    if (status === "idle") {
      setWeatherData(data)
    }
  }, [status])
  
  return (
    <>
      <Footer>
        <div className="footer__heading">
          <h3>
            sunrise & sunset
          </h3>
          <div className="city">
            {Object.keys(WeatherData).length > 0 ? WeatherData.location.name : "Surat"}
            <Button>
              <ExpandMoreIcon style={{ color: "white" }} />
            </Button>
          </div>
        </div>
        <FooterBox />
        <FooterBox />
      </Footer>
    </>
  )
}

export default SliderFooter

const Footer = styled.div`
padding-bottom: 3.5%;
border-bottom: 1px solid blue;
.footer__heading{
  display: flex;
  justify-content: space-between;
  padding: 5%;

  .city{
    margin-top: 5px;
  }
}
`