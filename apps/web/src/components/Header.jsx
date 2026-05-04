
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/staffing' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="font-bold text-xl">
              <span className="text-accent">FAFAB</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-accent ${
                  isActive(link.path) ? 'text-accent border-b-2 border-accent' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/admin"
                  className={`text-sm font-medium transition-all duration-200 hover:text-accent ${
                    isActive('/admin') ? 'text-accent border-b-2 border-accent' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Button 
                  onClick={handleLogout}
                  variant="outline" 
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/admin/login">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Admin login
                </Button>
              </Link>
            )}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all duration-200 hover:text-accent ${
                      isActive(link.path) ? 'text-accent' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-all duration-200 hover:text-accent ${
                        isActive('/admin') ? 'text-accent' : ''
                      }`}
                    >
                      Dashboard
                    </Link>
                    <Button 
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link to="/admin/login" onClick={() => setIsOpen(false)}>
                    <Button 
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                    >
                      Admin login
                    </Button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
