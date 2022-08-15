import { createSlice } from "@reduxjs/toolkit";

var STATUS = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
    INITIAL: "initial"
});

const weatherDataSlice = createSlice({
    name: "weatherData",
    initialState: {
        data: [],
        status: STATUS.INITIAL,
        city: 'surat'
    },
    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        setCity(state, action) {
            state.city = action.payload
        }
    }
})
export const { setData, setStatus, setCity } = weatherDataSlice.actions;
export default weatherDataSlice.reducer

//Thunk
export function fetchData(city) {
    const newCity = city;
    return async function allWeatherData(dispatch, state) {
        try {
            dispatch(setStatus(STATUS.LOADING));
            const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=39b0da6d26d34de7809111523220107&q=${newCity}&aqi=yes`);

            const data = await res.json();
            if (Object.keys(data).length === 2) {
                dispatch(setData(data));
                dispatch(setStatus(STATUS.IDLE));
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (err) {
            console.log(err.message);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

