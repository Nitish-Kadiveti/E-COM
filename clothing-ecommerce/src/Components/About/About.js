import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>We are a leading fashion retailer committed to providing high-quality clothing for men, women, and children. Our mission is to make fashion accessible and affordable for everyone.</p>
            <p>With over 10 years of experience in the fashion industry, we curate the latest trends and timeless classics to help you express your unique style.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500" alt="Fashion Store" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
