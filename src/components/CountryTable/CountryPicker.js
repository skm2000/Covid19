import React,{ useState,useEffect } from 'react'
import { fetchCountries } from '../api/index'
import { Container,Row } from 'react-bootstrap';



const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    },[fetchCountries])
    return (
        <Container>
            <Row>
                <form className="col-md-12 py-2" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <select className="form-control select2 shadow-sm p-2 bg-white rounded" style={{fontSize:'x-large'}}>
                    <option value="">Select Country</option> 
                    {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                    </select>
                </form>
            </Row>
        </Container>
    )
}

export default CountryPicker;
