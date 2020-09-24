import React from 'react';
import Header from '../Header/Header';
import './Display.css';
import place from '../../FakeData/Place';
import { Link } from 'react-router-dom';

const display = () => {
    return (
        <div className="display_area">
            <div className="menu_area">
                <Header></Header>
            </div>
            <div className="display_wrapper">
                    <div className='container'>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4">
                                <div className='display_info'>
                                    <h1>Cox's bazar</h1>
                                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                                </div>
                            </div>
                            
                            <div className="col-md-8 d-flex ">
                                {
                                    place.map(place => 
                                    <div className='display_content'>
                                        <div className='display_img'>
                                               <Link to={`/booking/${place.id}`}><img src={place.img} alt=""/></Link> 
                                            <div className='display-text'>
                                            <h2>{place.name}</h2>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default display;