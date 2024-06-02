import React, { useState, useRef } from 'react';

const SwipeMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Свайп влево
      setMenuOpen(false);
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // Свайп вправо
      setMenuOpen(true);
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'none' }}
    >
      {menuOpen && (
        <div className="menu">
          <p>Меню</p>
          {/* Ваше меню здесь */}
        </div>
      )}
      <div className="content">
        <p>Контент</p>
        {/* Ваш основной контент здесь */}
      </div>
    </div>
  );
};

export default SwipeMenu;