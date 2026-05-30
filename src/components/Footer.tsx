import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer-component">
      <p>&copy; {new Date().getFullYear()} anoveлло. All rights reserved.</p>
    </footer>
  );
};

export default Footer;