import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('World');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    alert(`Navigating to ${section} section`);
    // In a real app, you would use React Router here
  };

  const menuItems = [
    { id: 'about', label: 'Sobre'},
    { id: 'blog', label: 'Textos'},
    { id: 'gallery', label: 'Fotos'},
  ];

  // Header Img List
  const headerImages = [

    'src/assets/images/header-bg-1.jpg',
    'src/assets/images/header-bg-2.jpg'

  ];
 
 // Random Index for Header
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    // Select random image
    const randomIndex = Math.floor(Math.random() * headerImages.length);
    setRandomImage(headerImages[randomIndex]);
  }, []);

  return (
    <div className="app">
        
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Top White Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left">
            {/* Always Visible Burger Menu Button */}
            <button 
              className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
                <div className="burger-lines-container">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
            </button>
          </div>
          <div className="top-bar-right">            
            <span className="logo">ReactSite</span>
          </div>
        </div>

        {/* Always Present Dropdown Menu */}
        <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="dropdown-content">
            
            <div className="dropdown-section">
              <div className="menu-grid">
                {menuItems.map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className="menu-item"
                    onClick={() => handleNavClick(item.label)}
                  >
                    <span className="menu-item-label">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container">
        <header 
          className="header"
          style={{
            backgroundImage: randomImage 
              ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url(${randomImage})`
              : 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="header-overlay">

          </div>
        </header>

        <main className="main-content">
          <div className="greeting-section">
            <h2>Hello, <span className="highlight">{name}</span>! 👋</h2>
            <div className="name-input-group">
              <input
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="name-input"
              />
              <button 
                onClick={() => setName('World')}
                className="reset-button"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="counter-section">
            <h3>Interactive Counter</h3>
            <p className="counter-display">Count: <span>{count}</span></p>
            <div className="button-group">
              <button 
                onClick={() => setCount(count + 1)}
                className="primary-button"
              >
                Increment
              </button>
              <button 
                onClick={() => setCount(count - 1)}
                className="secondary-button"
              >
                Decrement
              </button>
              <button 
                onClick={() => setCount(0)}
                className="reset-button"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="features-section">
            <h3>✨ Features</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Fast Development</h4>
                <p>Built with React and Vite for instant updates</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>Custom CSS</h4>
                <p>Styled with pure CSS for full control</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🍔</div>
                <h4>Always Visible Menu</h4>
                <p>Burger menu available on all screen sizes</p>
              </div>
            </div>
          </div>

          <div className="message-section">
            <p>This website demonstrates a React application with an always-visible burger menu.</p>
            <p><small>Try clicking the "Menu" button in the top right corner!</small></p>
            <button 
              className="action-button"
              onClick={() => alert(`Hello ${name}! Thanks for visiting! 🎉`)}
            >
              Say Hello!
            </button>
          </div>
        </main>

        <footer className="footer">
          <p>Built with ❤️ using React</p>
          <div className="footer-links">
            <a 
              href="https://reactjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              React Docs
            </a>
            <a 
              href="https://vitejs.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Vite Docs
            </a>
            <a 
              href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              CSS Docs
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;