import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import PopUpModal from './components/PopUpModal';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FooterMap from './components/FooterMap';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenMenu = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <MenuGrid onOpenItem={handleOpenMenu} />

      <section id="gallery">
        <h2 className="section-title">Baked with Love</h2>
        <Gallery />
      </section>

      {/* FIX: Removed the <h2> here to prevent double titles and large gaps */}
      <section id="reviews">
        <Testimonials />
      </section>

      <FooterMap />

      {modalOpen && selectedItem && (
        <PopUpModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          item={selectedItem} 
        />
      )}
    </div>
  );
}

export default App;