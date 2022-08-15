import React from 'react';
import styled from 'styled-components';

function GraphSection() {


    return (
        <BodySection id="Image_Section">
            <BodySection className="Image_body">
            </BodySection>
            <h3>Weather App</h3>
        </BodySection>
    )
}

export default GraphSection

const BodySection = styled.div`
    height : 490px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >.Image_body{
        background-image: url("images/weatherImage.jfif");
        color: white;
        width: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    >h3{
        color : #405373;
    }
`