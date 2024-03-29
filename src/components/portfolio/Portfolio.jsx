import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.gif";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data=[
  {
    id:1,
    image:IMG1,
    title:'Amazon Clone',
    github:"https://github.com/Ajay-adhikari?tab=repositories",
    demo:"https://ajayproject.netlify.app/"
  },
  {
    id:2,
    image:IMG2,
    title:"Weather app",
    github:"https://github.com",
    demo:"https://dribbble.com/"
  },
  {
    id:3,
    image:IMG3,
    title:"Personal Portfolio",
    github:"https://github.com",
    demo:"https://dribbble.com/"
  },
  {
    id:4,
    image:IMG4,
    title:"Not available",
    github:"https://github.com",
    demo:"https://dribbble.com/"
  },
  {
    id:5,
    image:IMG5,
    title:"Not available",
    github:"https://github.com",
    demo:"https://dribbble.com/"
  },
  {
    id:6,
    image:IMG6,
    title:"Not available",
    github:"https://github.com",
    demo:"https://dribbble.com/"
  }



]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MY Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id , image , title , github , demo})=>{
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          

          <h3>{title}</h3>
         
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank" target='_blank'>
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  );
};

export default Portfolio;
