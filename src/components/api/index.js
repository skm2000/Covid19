import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

// search for countries
export const fetchCountries = async() => {
    try {
        // const md = await axios.get(`${url}/countries/india/confirmed`);
        // console.log(md)
        const { data: { countries }} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error);
    }
}

// fetch country data
export const fetchCountryData = async(country) => {
    let changeableurl = url
    if(country){
        changeableurl = `${url}/countries/${country}`
    }
    try {

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableurl);
        return { confirmed, recovered, deaths, lastUpdate }

    } catch (error) {
        console.log("error")
    }
}

// fetch country state data
export const fetchCountryStateData = async(country) => {
    console.log(country)
    let changeableurl = url
    if(country){
        changeableurl = `${url}/countries/${country.toLowerCase()}/confirmed`
    }
    try {
        const stateArray = {};
        const data = await axios.get(changeableurl);
        
        // for(var i=0;i<data.data.length;i++){
            stateArray.push(data.data)
        // }
        console.log(data.data);
        return stateArray;
        // return { provinceState, confirmed, recovered, deaths, active }

    } catch (error) {
        console.log("error")
    }
}
