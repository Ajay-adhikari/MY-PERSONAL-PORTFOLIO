import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
  {
    avatar: AVTR3,
    name: "Amazon Clone ",
    review:
      "I developed a full-stack Amazon clone using the MERN (MongoDB, Express.js, React, Node.js) stack. The project aimed to replicate the core functionalities of Amazon's e-commerce platform, including user authentication, product listings, cart management, and checkout process. ",
  },
  {
    avatar: AVTR4,
    name: "Weather App",
    review:
      "I developed an Amazon clone weather app using HTML, CSS, and JavaScript. The project aimed to combine the functionality of an Amazon product listing with weather information for a given location. Users can search for a location, view weather details, and browse through related product recommendations. ",
  },
  {
    avatar: AVTR1,
    name: "GFG AND LEETCODE",
    review:
      "Solved more than 500 problems on GFG and leetcode and Achieved first postition in my Institute at coding platform GFG",
  },
  {
    avatar: AVTR2,
    name: "LEETCODE AND CODECHEF RATING",
    review:
      "1700+ rating on leetcode and codechef 3 star ",
  },
  
  
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>WhAT I ACHIEVE AND PERFORMED</h5>
      <h2>ACHIEVEMENTS and CREATION</h2>
      <Swiper className="container testimonials__container"
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      
     
      
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
            
          );
        })}
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
