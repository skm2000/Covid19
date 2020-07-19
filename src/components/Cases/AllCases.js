import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import { Row,Col,Card } from 'react-bootstrap';
import WorldCharts from '../charts/WorldCharts';
import WorldChartsActive from '../charts/WorldChartsActive';
import WorldChartsDeath from '../charts/WorldChartsDeath';
import WorldChartsRecovered from '../charts/WorldChartsRecovered';

const AllCases = () => {
    const [confirmed,setConfirmed] = useState(0);
    const [recovered,setRecovered] = useState(0);
    const [deaths,setDeaths] = useState(0);
    const [lastUpdate,setLastUpdate] = useState('');

    useEffect(() => {
        const fetchWorlddata = async() => {
            const res = await axios('https://covid19.mathdro.id/api');
            setConfirmed(res.data.confirmed);
            setRecovered(res.data.recovered);
            setDeaths(res.data.deaths);
            setLastUpdate(res.data.lastUpdate);
        }
        fetchWorlddata();    
    },[])

    return (
        <Row className="my-3">
            <Col className="my-2" xs={12} md={3}>
                <Card border="primary">
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={6}>
                                <Card.Title>Infected</Card.Title>
                                <Card.Text>{confirmed.value}</Card.Text>
                                <Card.Text>{new Date(lastUpdate).toDateString()}</Card.Text>
                            </Col>
                            <Col xs={6} md={6}>
                                <Card.Text><WorldCharts/></Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={3}>
                <Card border="danger">
                    <Card.Body>
                       <Row>
                           <Col xs={6} md={6}>
                                <Card.Title className="text-red">Active</Card.Title>
                                <Card.Text>{confirmed.value-(recovered.value+deaths.value)}</Card.Text>
                                <Card.Text>{new Date(lastUpdate).toDateString()}</Card.Text>
                           </Col>
                           <Col xs={6} md={6}>
                                <Card.Text><WorldChartsActive/></Card.Text>
                           </Col>
                       </Row>

                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={3}>
                <Card border="success">
                    <Card.Body>
                    <Row>
                        <Col xs={6} md={6}>
                            <Card.Title className="text-red">Recovered</Card.Title>
                            <Card.Text>{recovered.value}</Card.Text>
                            <Card.Text>{new Date(lastUpdate).toDateString()}</Card.Text> 
                        </Col>
                        <Col xs={6} md={6}>
                            <Card.Text><WorldChartsRecovered/></Card.Text> 
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="my-2" xs={12} md={3}>
                <Card border="secondary">
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={6}>
                                <Card.Title>Deaths</Card.Title>
                                <Card.Text>{deaths.value}</Card.Text>
                                <Card.Text>{new Date(lastUpdate).toDateString()}</Card.Text>
                            </Col>
                            <Col xs={6} md={6}>
                                <Card.Text><WorldChartsDeath/></Card.Text>
                            </Col>
                        </Row>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default AllCases;