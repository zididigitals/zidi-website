import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/internship", label: "Internship" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 20;
      const atTop = scrollY === 0;
      setScrolled(isScrolled);
      setIsAtTop(atTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    // Close mobile menu if open
    if (open) {
      setOpen(false);
    }
    // Navigate to the new route
    navigate(path);
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isAtTop ? 'py-2' : 'py-1'
  } ${scrolled ? 'shadow-lg shadow-primary/5 backdrop-blur-xl' : ''}`;

  const containerClasses = `flex items-center justify-between transition-all duration-300 ${
    isAtTop ? 'h-12' : 'h-10'
  }`;

  const logoContainerClasses = `relative bg-gradient-to-br from-primary/5 to-accent/5 p-0.5 rounded-xl transition-all duration-300 group-hover:from-primary/10 group-hover:to-accent/10`;

  const logoImageClasses = `transition-all duration-300 object-contain rounded-lg ${
    isAtTop ? 'h-8 w-auto' : 'h-7 w-auto'
  } group-hover:scale-105`;

  const textClasses = `font-bold tracking-tight transition-all duration-300 ${
    isAtTop ? 'text-lg' : 'text-base'
  }`;

  const getNavLinkClasses = (isActive: boolean) => {
    return `relative px-3 py-1.5 text-sm font-medium transition-all duration-300 cursor-pointer rounded-md ${
      isActive 
        ? "text-primary bg-primary/10" 
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    }`;
  };

  return (
    <header className={headerClasses}>
      
      <nav className="relative container max-w-7xl mx-auto px-6">
        <div className={containerClasses}>
          {/* Compact logo section */}
          <Link 
            to="/" 
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-102"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
          >
            <div className="relative">
              {/* Logo container */}
              <div className={logoContainerClasses}>
                <img 
                  src="/logo.jpeg" 
                  alt="Zidi Digital Solutions – Digitally Different | Divyesh Bondapalli CEO" 
                  className={logoImageClasses}
                />
              </div>
            </div>
            
            {/* Clean text */}
            <div className="flex flex-col">
              <span className={textClasses}>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Zidi Digital Solutions
                </span>
              </span>
            </div>
          </Link>

            {/* Compact desktop navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-6">
                {navItems.map((item, index) => (
                  <li key={item.to} className="relative">
                    <NavLink
                      to={item.to}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.to);
                      }}
                      className={({ isActive }) => getNavLinkClasses(isActive)}
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        {item.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compact mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Simple mobile menu */}
          {open && (
            <div className="md:hidden mt-2 animate-slide-down">
              <div className="bg-background/95 backdrop-blur-lg rounded-lg border border-border/30 shadow-lg mx-2">
                <ul className="p-2 space-y-1">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.to);
                        }}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive 
                              ? "text-primary bg-primary/10" 
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </nav>
    </header>
  );
}
