import React from 'react'
import { Table,Row,Col } from 'react-bootstrap';

const CountryTable = () => {
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
                            <th scope="row">1</th>
                            <td>625000</td>
                            <td>320000</td>
                            <td>425000</td>
                            <td>425000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>625000</td>
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
                        <tr>
                            <th scope="row">5</th>
                            <td>625000</td>
                            <td>320000</td>
                            <td>425000</td>
                            <td>425000</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
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