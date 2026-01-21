import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Aniket Sonsale",
      text: "Tried the signature Korean bun - lovely flavours but texture could be a bit better. Bun could have been warmer, and would be better with a crispier outside and fluffier inside. Cream cheese and garlic butter were delicious though. Can’t fault the price though - great value at 65 rs",
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 2,
      name: "Deccan Monk",
      text: "Ovenly (Church Street) Cozy bakery-café with fresh bakes and desserts.Cookies and brownies are standout items.Coffee pairs well with the baked goodsCalm interiors — good for short sit-downs.Staff polite and service smooth.Prices fair for artisanal-style baking.Nice sweet stop during a Church Street walk..",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 3,
      name: "Manasi Sharma",
      text: "Delightful nook offering a wide array of gourmet pastries and muffins. Savory croissants and cheesecakes are highly recommended. Specialty lattes and hot chocolate are crowd favorites. Rustic aesthetic — perfect for a peaceful afternoon. Crew is attentive and the atmosphere is inviting. ",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section className="testimonials-section" id="reviews">
      <div className="scroller-header">
        <h2 className="section-title">Sweet Words</h2>
        <div className="title-dash"></div>
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={review.id} className={`review-bubble float-anim-${index}`}>
            <div className="bubble-content">
              <span className="quote-mark">“</span>
              <p className="review-text">{review.text}</p>
              <div className="review-footer">
                <h4 className="reviewer-name">{review.name}</h4>
                <div className="stars-row">{review.rating}</div>
              </div>
            </div>
            {/* The little tail that makes it a speech bubble */}
            <div className="bubble-tail"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;