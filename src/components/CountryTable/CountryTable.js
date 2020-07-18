import React from 'react'
import { Table, Row, Col } from 'react-bootstrap';
import {
    fetchCountryJsonData
} from '../api'

export default class CountryTable extends React.Component{
    constructor(props) {
        super()
        this.state = {
            data: null
        }
    }
    componentDidUpdate() {
        var url = this.props.data.confirmed.detail
        fetchCountryJsonData(url)
            .then(res => {
                console.log("Response", res)
                this.setState({
                    data: res
                })
            })
    }
    componentWillMount() {
        // console.log("Props", this.props.data.confirmed.detail)
        var url = this.props.data.confirmed.detail
        fetchCountryJsonData(url)
            .then(res => {
                console.log("Response", res)
                this.setState({
                    data: res
                })
            })

    }
    render() {
        return (
            <Row className="px-md-2">
                {/* {console.log("Props", this.props.data.confirmed.detail)} */}
                {console.log("State :",this.state.data)}
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
                                <div>
                                    <th scope="row">{val.provinceState}</th>
                                    <td>{val.confirmed}</td>
                                    <td>{val.active}</td>
                                    <td>{val.recovered}</td>
                                    <td>{val.deaths}</td>
                                </div>
                            ) : null}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}
