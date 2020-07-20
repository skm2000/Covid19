import React from 'react'
import { Table, Row, Col } from 'react-bootstrap';
import {
    fetchCountryJsonData
} from '../api'
import StateCharts from '../charts/StateCharts'
import { height } from '@amcharts/amcharts4/.internal/core/utils/Utils';

export default class CountryTable extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            state: null,
            confirmed: null,
            active: null,
            recovered: null,
            deaths: null,
        }
    }
    componentDidUpdate() {
        var url = this.props.data.confirmed.detail
        fetchCountryJsonData(url)
            .then(res => {
                // console.log("Response", res)
                this.setState({
                    data: res
                })
            })
    }
    componentWillMount() {
        console.log("Props", this.props.data.confirmed.detail)
        var url = this.props.data.confirmed.detail
        fetchCountryJsonData(url)
            .then(res => {
                // console.log("Response", res)
                this.setState({
                    data: res
                })
            })

    }
    sendData = (state, confirmed, active, recovered, deaths) => () => {
        // console.log(state, confirmed, active, recovered, deaths)
        var jsonData = {
            "state": state,
            "confirmed": confirmed,
            "active": active,
            "recovered": recovered,
            "deaths": deaths,
        }
        this.setState({
            state: state,
            confirmed: confirmed,
            active: active,
            recovered: recovered,
            deaths: deaths,
        })
    }
    render() {
        return (
            <Row className="px-md-2" >
                {/* {console.log("Props", this.props.data.confirmed.detail)} */}
                {/* {console.log("State :",this.state.data)} */}
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
                            {this.state.data != null? this.state.data.map((val) =>
                                <>
                                    {/* {this.sendData(val.provinceState,val.confirmed,val.active,val.recovered,val.deaths)} */}
                                    <tr onMouseMove={this.sendData(val.provinceState,val.confirmed,val.active,val.recovered,val.deaths)}>
                                    <th scope="row">{val.provinceState}</th>
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
                        this.state.state != null ?
                            <StateCharts state={this.state.state}
                                confirmed={this.state.confirmed}
                                recovered={this.state.recovered}
                                active={this.state.active}
                                deaths={this.state.deaths}
                            />
                            :
                            null
                    }
                </Col>
            </Row>
        )
    }
}
