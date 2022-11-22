import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import './Statistics.css';
import { 
    Bar, 
    BarChart, 
    CartesianGrid, 
    Legend, 
    Line, 
    LineChart, 
    ResponsiveContainer, 
    Tooltip, 
    XAxis, 
    YAxis 
} from 'recharts';

const Statistics = () => {
    const topicData = useLoaderData();
    const topic = topicData.data;

    return (
        <Container className='my-4'>
            <h2 className='chart-title mb-5'>Total Number of Quiz for each topic shown in Charts</h2>
            <Row className="chart-container">
                <Col xs={12} lg={6}>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart width={500} height={400} data={topic}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="total" fill="#8884d8" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
                <Col xs={12} lg={6}>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart width={500} height={400} data={topic}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default Statistics;