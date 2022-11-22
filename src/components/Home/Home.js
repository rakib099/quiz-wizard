import React from 'react';
import './Home.css';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';

const Home = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    return (
        <Container>
            <header className="banner-container my-3">
                <Banner />
            </header>
            <div className="topics-container mb-5">
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