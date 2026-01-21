import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    { id: 1, title: "Lemon Cake", img: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500" },
    { id: 2, title: "Creamy Tart", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500" },
    { id: 3, title: "Sweet Smiles", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500" },
    { id: 4, title: "Holiday Love", img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500" },
    { id: 5, title: "Sweet Moments", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500" },
    { id: 6, title: "Bakery Corner", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500" },
    { id: 7, title: "Fresh Breads", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500" },
    { id: 8, title: "Morning Joy", img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=500" }
  ];

  return (
    <div className="gallery-polaroid-section">
      {/* Decorative Light String */}
      <div className="light-string">
        <div className="wire"></div>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bulb"></div>
        ))}
      </div>

      <div className="polaroid-grid-container">
        {galleryImages.map((item, index) => (
          <div key={item.id} className={`polaroid-card item-${index}`}>
            <div className="tape"></div>
            <div className="polaroid-inner">
              <img src={item.img} alt={item.title} />
              <p className="polaroid-caption">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;