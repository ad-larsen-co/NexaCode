import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/work", label: "Our Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0a1f1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1f1a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="transition-transform group-hover:scale-110" />
              <span className="text-2xl font-bold text-white">
                Nexa<span className="text-[#c4ff61]">Code</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base transition-colors ${
                    location.pathname === link.path
                      ? "text-[#c4ff61]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pt-4 pb-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base transition-colors ${
                    location.pathname === link.path
                      ? "text-[#c4ff61]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#051410] border-t border-white/10 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4 group">
                <Logo className="transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-white">
                  Nexa<span className="text-[#c4ff61]">Code</span>
                </h3>
              </Link>
              <p className="text-white/60 text-sm">
                Building exceptional software solutions that drive digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/60 text-sm hover:text-[#c4ff61] transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 text-sm hover:text-[#c4ff61] transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 text-sm hover:text-[#c4ff61] transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 text-sm hover:text-[#c4ff61] transition-colors">
                    AI Integration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-white/60 text-sm hover:text-[#c4ff61] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-white/60 text-sm hover:text-[#c4ff61] transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/60 text-sm hover:text-[#c4ff61] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/40 text-sm text-center">
              © 2026 NexaCode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}