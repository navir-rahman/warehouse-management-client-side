import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';
class Slider extends React.Component {
    render() {
        return (

            <div className=' slider mb-5' >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item className="slider-item">
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/500/300?img=1"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="slider-item">
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/500/300?img=1"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="slider-item">
                                <img
                                    className="d-block w-100"
                                    src="https://picsum.photos/500/300?img=1"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;