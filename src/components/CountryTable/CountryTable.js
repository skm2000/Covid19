import React, {useState, useEffect} from 'react'
import { Table, Row, Col } from 'react-bootstrap';
import {
    fetchCountryJsonData
} from '../api'
import StateCharts from '../charts/StateCharts'
import '../CountryTable/Country.css'
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import { TableSortLabel } from '@material-ui/core';

const CountryTable = (props) => {
    // console.log("Py", props.data.confirmed.detail);
    const [table, setTable] = useState([]);
    const [tconfirmed,setTconfirm] = useState(0);
    const [tactive,setTactive]= useState(0);
    const [trecovered,setTrecovered] = useState(0);
    const [tdeath,setTdeath] = useState(0);
    const [state,setState] = useState(null);
    useEffect(() =>{
        const fetchAPI = async () => {
            setTable(await fetchCountryJsonData(props.data.confirmed.detail))
            // setTconfirm()
        }
        fetchAPI();
        // console.log("table", table);
    }, [props])
// export default class CountryTable extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: null,
//             state: null,
//             confirmed: null,
//             active: null,
//             recovered: null,
//             deaths: null,
//             country: null
//         }
//     }
//     // console.log(props)
//     // componentWillUpdate() {
//     //     var url = this.props.data.confirmed.detail
//     //     fetchCountryJsonData(url)
//     //         .then(res => {
//     //             // console.log("Response", res)
//     //             this.setState({
//     //                 data: res
//     //             })
//     //         })
//     // }
//     componentWillMount() {
//         console.log("Props", this.props.data)
//         var url = this.props.data.confirmed.detail
//         fetchCountryJsonData(url)
//             .then(res => {
//                 // console.log("Response", res)
//                 this.setState({
//                     data: res
//                 })
//             })

//     }
    const sendData = (state, confirmed, active, recovered, deaths) => () => {
        console.log(state, confirmed, active, recovered, deaths)
        setTconfirm(confirmed);
        setTrecovered(recovered);
        setTactive(active);
        setTdeath(deaths);
        setState(state)
        // var jsonData = {
        //     "state": state,
        //     "confirmed": confirmed,
        //     "active": active,
        //     "recovered": recovered,
        //     "deaths": deaths,
        //     "country": country
        // }
        // this.setState({
        //     state: state,
        //     confirmed: confirmed,
        //     active: active,
        //     recovered: recovered,
        //     deaths: deaths,
        //     country:country
        // })
    }
    // render() {
        // onMouseMove={this.sendData(val.provinceState,val.confirmed,val.active,val.recovered,val.deaths)}
        return (
            <Row className="px-md-2">
                {console.log("TABLE", table)}
                {/* {console.log("Props", this.props.data.confirmed.detail)} */}
                {/* {console.log("State :",this.state.data)} */}
                 <Col xs={12} md={6} style={{overflowY:'scroll',maxHeight:'400px',scrollbarColor:'pink grey'}}>                     
                    <Table className="table table-fixed table-hover" responsive>
                        <thead>
                            <tr>
                                <th>States/Province</th>
                                <th>Confirmed</th>
                                <th>Active</th>
                                <th>Recovered</th>
                                <th>Deceased</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.length != 0? table.map((val) =>
                                <>
                                <tr onMouseMove={sendData(val.provinceState,val.confirmed,val.active,val.recovered,val.deaths)}>
                                    <th scope="row" style={{fontWeight:'normal'}}>{val.provinceState}</th>
                                    <td>{val.confirmed}</td>
                                    <td>{val.active}</td>
                                    <td>{val.recovered}</td>
                                    <td>{val.deaths}</td>
                                    </tr>
                                </>
                            ) : null}
                        </tbody>
                    </Table>
                </Col>
                <Col  xs={12} md={6}>
                    {
                        state != null ?
                            <StateCharts state={state}
                                confirmed={tconfirmed}
                                recovered={trecovered}
                                active={tactive}
                                deaths={tdeath}
                            />
                            :
                            null
                    }
                </Col> 
            </Row>
        )
    }

    export default CountryTable;
