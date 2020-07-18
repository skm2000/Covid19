import React from 'react'
import CountUp from 'react-countup';
import { Row,Col,Card } from 'react-bootstrap';

const CountryCases = ({ data: { confirmed, recovered, deaths } }) => {
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <Row className="my-3">
            <Col className="my-2" xs={12} md={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Confirmed</Card.Title>
                        <Card.Text><CountUp start={0} end={confirmed.value} duration={2.75} separator="," /></Card.Text>
                        {/* {data.data.recovered !== undefined ? data.data.recovered.value : null} */}
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Active</Card.Title>
                        <Card.Text><CountUp start={0} end={confirmed.value-(recovered.value + deaths.value)} duration={2.75} separator="," /></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Recovered</Card.Title>
                        <Card.Text><CountUp start={0} end={recovered.value} duration={2.75} separator="," /></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Deaths</Card.Title>
                        <Card.Text><CountUp start={0} end={deaths.value} duration={2.75} separator="," /></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default CountryCases;