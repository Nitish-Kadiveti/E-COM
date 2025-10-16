import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Sarah Johnson", text: "Amazing quality clothes and fast delivery!", rating: 5 },
    { id: 2, name: "Mike Chen", text: "Great collection for men. Highly recommended!", rating: 5 },
    { id: 3, name: "Emily Davis", text: "My kids love their new outfits from here.", rating: 4 }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
