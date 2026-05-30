import React from 'react';

// Define the structure for navigation links
export interface NavItem {
  to: string;
  label: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <header className="header-component">
      <div className="logo">anoveлло.com.br</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.to}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;