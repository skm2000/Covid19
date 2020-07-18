import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

// search for countries
export const fetchCountries = async() => {
    try {
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

