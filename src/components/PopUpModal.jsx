import React from 'react';
import './PopUpModal.css';

const PopUpModal = ({ isOpen, onClose, item }) => {
  // 1. THE FIX: If the modal isn't open OR there is no item selected, 
  // we return null so NOTHING shows up on your screen.
  if (!isOpen || !item) {
    return null;
  }

  const handleWhatsAppOrder = () => {
    // 2. THE REPLY: This creates the automatic reply message for you
    const message = `Hi Ovenly Home Bakers and Patisserie ! I'm a customer. I want to order: ${item.name} (${item.price}).`;
    const whatsappUrl = `https://wa.me/919204781140?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* The Close Button */}
        <button className="close-x-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-inner-content">
          <div className="modal-image-wrapper">
            <img src={item.img} alt={item.name} />
          </div>
          
          <div className="modal-text-details">
            <h2>{item.name}</h2>
            <span className="modal-price-tag">{item.price}</span>
            <p className="modal-description">{item.desc || "Freshly prepared at Ovenly Home Bakers and Patisserie."}</p>
            
            {/* The Big Green Order Button */}
            <button className="modal-order-whatsapp" onClick={handleWhatsAppOrder}>
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;


