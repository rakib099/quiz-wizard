import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    return (
        <Container>
            <div className="banner-container">

            </div>
            <div className="topics-container">
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        topics.map(topic => <Topic 
                            key={topic.id} 
                            topic={topic}
                            />)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Home;