'use cleint'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavDropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Handle opening and closing the dropdown with a delay
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen) {
      setShouldRender(true); // Show dropdown immediately on hover
    } else {
      timeout = setTimeout(() => setShouldRender(false), 3000); // Delay hiding by 3 seconds
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-ts  focus:outline-none">
        {label}
      </button>

      {/* Only render the dropdown if shouldRender is true */}
      {shouldRender && (
        <motion.div
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="py-2">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavDropdown;
