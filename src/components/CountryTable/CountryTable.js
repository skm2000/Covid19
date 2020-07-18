import React,{ useState,useEffect } from 'react'
import { Table,Row,Col } from 'react-bootstrap';
import { fetchCountries,fetchCountryStateData } from '../api/index'


const CountryTable = ({country}) => {
    // console.log(confirmed)
    const [fetchedCountries,setFetchedCountries] = useState([]);
    const [state,setState] = useState({});
    // const [confirmedState,setConfirmedState] = useState([]);
    // const [activeState,setActiveState] = useState([]);
    // const [recoveredState,setRecoveredState] = useState([]);
    // const [deathState,setDeathState] = useState([]);
    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries())
            setState(await fetchCountryStateData(country))
            // setConfirmedState(await fetchCountryStateData(country,confirmed))
            // setActiveState(await fetchCountryStateData(country,active))
            // setRecoveredState(await fetchCountryStateData(country,recovered))
            // setDeathState(await fetchCountryStateData(country,deaths))
        }
        fetchAPI();
        // console.log(confirmed)
    },[])
    if (!country) {
        return 'Loading...';
    }
    return (
        <Row className="px-md-2">
            <Col xs={12} md={6}>
                <Table className="table table-hover" responsive>
                    <thead>
                        <tr>
                            <th>States</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {/* {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)} */}
                            {/* {stateName.map((state,i) => <td key={i} value={state}></td>)} */}
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>450000</td>
                            <td>320000</td>
                            <td>425000</td>
                            <td>425000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>625000</td>
                            <td>320000</td>
                            <td>425000</td>
                            <td>425000</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>625000</td>
                            <td>320000</td>
                            <td>425000</td>
                            <td>425000</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default CountryTable;