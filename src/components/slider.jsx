import React, { useState } from 'react';
import '../App.css';


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/11288661/pexels-photo-11288661.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Innovative Scan Technology',
      text: 'Smart Check Scanner utilizes cutting-edge scanning technology to instantly analyze and detect errors, enhancing accuracy and efficiency in every scan.',
    },
    {
      image: 'https://images.pexels.com/photos/3582392/pexels-photo-3582392.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Real-Time Error Detection',
      text: 'With real-time error detection, the Smart Check Scanner identifies discrepancies and alerts users instantly, reducing human error and streamlining workflows.',
    },
    {
      image: 'https://images.pexels.com/photos/22610370/pexels-photo-22610370.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Seamless Integration',
      text: 'Our scanner integrates smoothly with existing systems, allowing businesses to adopt this innovative technology without disrupting daily operations.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
        <div className="slider-content">
          <h2 className='slider-content_topic'>{slides[currentIndex].title}</h2>
          <p className='slider-content_text'>{slides[currentIndex].text}</p>
        </div>
      </div>
      <div className="slider-nav">
        <button className="arrow-left" onClick={prevSlide}>←</button>
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <button className="arrow-right" onClick={nextSlide}>→</button>
      </div>
    </div>
  );
};

export default Slider;
