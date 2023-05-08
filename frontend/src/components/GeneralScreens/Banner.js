import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../Css/Banner.css"

const Banner = () => {
    const settings ={
        dots : true ,
        infinite : true ,
        speed : 800 ,
        slidesToShow : 1 ,
        slidesToScroll : 1 ,
        autoplay : true ,
        autoplaySpeed : 3000 ,
    };
    return (
        
        <Slider {...settings}>
            <div className='slide'>
                <img className='img' src={require("../../1.jpeg") } alt=""/>
            </div>
            <div className='slide'>
                <img className='img' src={require("../../4.jpeg") } alt=""/>
            </div>
            <div className='slide'>
                <img className='img' src={require("../../2.jpg") } alt=""/>
            </div>
            <div className='slide'>
                <img className='img' src={require("../../3.jpeg") } alt=""/>
            </div>
            
        </Slider>
    )
}

export default Banner;