import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

// search for countries
export const fetchCountries = async() => {
    try {
        const md = await axios.get(`${url}/countries/india/confirmed`);
        console.log(md)
        const { data: { countries }} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error);
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

export const fetchCountryJsonData = async(url) => {
    try{
        const data = await axios.get(url);
        console.log(data.data);
        return data.data;
    }
    catch(error){
        console.log(error);
    }
    // return fetch(url)
    //     .then(res => {
    //         // console.log("JDATA", res)
    //         return res.json()})
    //     .then(data=>{
    //         console.log("DATA", data)
    //         return data
    //     })
    //     .catch(err => console.log(err))
}


export const fetchCountrie = async () => {

    try {
      const urlAn = 'https://disease.sh/v2/countries';
        const  { data }  = await axios.get(`${urlAn}`);
        return data;
      } catch (error) {
        return error;
      }
}


export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`)
    
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
            active: dailyData.deltaConfirmedDetail.total,
            recovered: dailyData.confirmed.total-dailyData.deaths.total,
        }))
        return modifiedData

    } catch (error) {
        
    }
}

export const fetchCummulativeCountry = (country) => {
    console.log(`https://api.covid19api.com/total/country/${country}`)
    return fetch(`https://api.covid19api.com/total/country/${country}`)
        .then(data => {
            return data.json()
        })
        .then(res => {
            // console.log(res)
            const modifiedData = res.map((dailyData) => ({
                confirmed: dailyData.Confirmed,
                deaths: dailyData.Deaths,
                date: dailyData.Date,
                active: dailyData.Active,
                recovered: dailyData.Recovered
            }))
            console.log("modifiedData:",modifiedData)
            return modifiedData;
        })
        .catch(err => console.log(err))
}


export const fetchNewsData = async(code) => {
    try {
        
        const data = await axios.get(`https://covidnewsapi.herokuapp.com/country/?queryCountry=${code}`)
        // console.log(data.data.articles);
        return data.data.articles;
    } catch (error) {
        console.log(error)
    }
}