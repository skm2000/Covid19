import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap';
import {
    getCases
} from './apiFetch'


export default class AllCases extends React.Component {
    constructor(props) {
        super()
        this.state = {
            cases: null,
            active: null,
            deaths: null,
            recovered: null,
            confirmed: null,
        }
    }

    componentWillMount() {
        getCases("India")
            .then((result) => {
                console.log(result.active);
                this.setState({
                    cases: result,
                    active: result.active,
                    deaths: result.deaths,
                    confirmed: result.confirmed,
                    recovered: result.recovered
                }, () => {
                        console.log("state", this.state)
                })
            })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Row className="my-3">
                <Col className="my-2" xs={12} md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Active</Card.Title>
                            <Card.Text>
                                Active {this.state.active}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-2" xs={12} md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-red">Recovered</Card.Title>
                            <Card.Text>
                               Recovered {this.state.recovered}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-2" xs={12} md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Confirmed</Card.Title>
                            <Card.Text>
                                Confirmed {this.state.confirmed}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-2" xs={12} md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Deaths</Card.Title>
                            <Card.Text>
                                Deaths {this.state.deaths}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

// export default AllCases;