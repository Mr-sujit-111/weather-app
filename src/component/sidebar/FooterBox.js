import React from 'react'
import styled from 'styled-components'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function FooterBox() {
    return (
        <>
            <FooterBoxContainer>
                <div className="row footer__card my-2">
                    <div className="col-sm-6">
                        <div className="row ">
                            <div className="col-sm-5 icon">
                                <WbSunnyIcon />
                            </div>
                            <div className="col-sm-7 ">
                                <div className="card__text">
                                    Sunrise
                                </div>
                                <div className="">
                                    06:20 AM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 card__text">
                        <span style={{ fontSize: "12px" }}>4 hours ago</span>
                    </div>
                </div>
            </FooterBoxContainer>
        </>
    )
}

export default FooterBox

const FooterBoxContainer = styled.div`
    .footer__card{
        background-image: linear-gradient(#29426A, #2D4C85);
    padding: 20px;
    background: black;
    width: 91%;
    margin-left: 4%;
    border-radius: 15px;
    background: #365689;
    margin-bottom: 10px;
    }
    .icon{
        display: flex;
    align-items: center;
    }
    .card__text{
        color: #91A8CA;
    }
`