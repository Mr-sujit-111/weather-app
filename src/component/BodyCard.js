import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

function BodyCard(props) {
    const { WeatherIcon, ArrowIcon, Title, BigData, SmallData } = props;
    return (
        <>
            <div className="col-sm-6">
                <Mystyle>
                    <div className="body__data">
                        <div className="row">
                            <div className="col-sm-2">
                                <Button>
                                    <WeatherIcon />
                                </Button>
                            </div>
                            <div className="col-sm-5">
                                <div className="data__heading">
                                    <span>{Title}</span>
                                </div>
                                <div className="data__body">
                                    {BigData}
                                </div>
                            </div>
                            <div className="col-sm-5 moreDetailedWeatherData">
                                <Button>
                                    <ArrowIcon />
                                </Button>
                                {SmallData}
                            </div>
                        </div>
                    </div>
                </Mystyle>
            </div>
        </>
    )
}

export default BodyCard

const Mystyle = styled.div`
    background-color: aliceblue;
    padding: 4%;
    border-radius: 14px;
    margin: 3%;

    .data__heading{
        color: #7e8da5;
        font-size: 15px;
    }
`