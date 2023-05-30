import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"
const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>UI/UX  Design</h3>
        </div>

        <ul className='service__list'>
          <li>
          <BiCheck className='service__list-icon' />
          <p>User Interface (UI) Design: Crafting visually appealing and intuitive interfaces for web applications.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>User Experience (UX) Design: Ensuring seamless and engaging interactions within the application.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Usability Testing: Conducting user feedback sessions to improve the design's effectiveness.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Collaborative Design Process: Involving clients throughout the design journey for aligned outcomes.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Design System Development: Creating design systems for consistency and efficiency.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Responsive Design: Optimizing the application for various screen sizes and devices.</p>
          </li>
          
          

        </ul>
      </article>
      {/* end of ui/ux */}
      <article className='service'>
        <div className="service__head">
          <h3>Web development</h3>
        </div>

        <ul className='service__list'>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Front-End Development: Creating responsive and interactive user interfaces using HTML, CSS, and JavaScript frameworks like React.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Back-End Development: Developing server-side applications using Node.js and Express.js, with database integration (MongoDB).</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Full-Stack Development: Offering end-to-end web development solutions using the MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks.</p>
          </li>
          <li>
          
          <BiCheck className='service__list-icon' />
          <p>E-commerce Development: Developing secure and feature-rich e-commerce platform</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Web Maintenance and Support: Providing ongoing support, bug fixes, updates, and server monitoring for web applications.</p>
          </li>
          
          

        </ul>
      </article>
      {/* end of ui/ux */}
      <article className='service'>
        <div className="service__head">
          <h3>C++ and Data Structures</h3>
        </div>

        <ul className='service__list'>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Data Structures Implementation: Designing and implementing various data structures in C++..</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Algorithm Development: Creating optimized algorithms to solve complex problems in C++.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Performance Optimization: Enhancing code performance and reducing execution time in C++.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Code Review and Refactoring: Reviewing and refactoring C++ code for readability and maintainability.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Debugging and Troubleshooting: Effectively debugging and troubleshooting C++ code.</p>
          </li>
          <li>
          <BiCheck className='service__list-icon' />
          <p>Utilizing Libraries and Frameworks: Leveraging existing C++ libraries and frameworks for efficient development.</p>
          </li>
          
          

        </ul>
      </article>
    </div>

    
      
    </section>
  )
}

export default Services
