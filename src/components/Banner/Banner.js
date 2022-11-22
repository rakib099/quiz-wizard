import React from 'react';
import './Banner.css';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div id="quiz-carousel" className="carousel slide" data-bs-ride="false">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner} className="banner-img d-block w-100  rounded-lg" alt="banner-img"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='fw-bold'>Brainstorm and Win Prizes!</h2>
                            <p className='fs-5'>It's basically a platform to show your knowledge and get certified by attending quizes.</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;