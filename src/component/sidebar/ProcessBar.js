import React from 'react'
import styled from 'styled-components'

function ProcessBar(props) {
    const { time, percentage } = props;

    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${percentage}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <>
            <Process className="row">
                <div className="col-sm-3 time">
                    {time}
                </div>
                <div className="col-sm-9">
                    <div className="processbar__progress">
                        <div className="progressbar__done" style={style}>
                            {percentage}%
                        </div>
                    </div>
                </div>
            </Process>
        </>
    )
}

export default ProcessBar

const Process = styled.div`
margin: 1%;
>.time{
    padding-top: 3%;
}
`