import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import Brand from './Brand.jsx';

const links = [
  ['Home', '/'], ['About us', '/about'], ['Academics', '/academics'],
  ['Facilities', '/facilities'], ['Admissions', '/admissions'], ['Contact', '/contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>📍 Umuguma, Owerri, Imo State, Nigeria</span><span>Learning today. Leading tomorrow.</span></div></div>
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'}>
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <div className="nav-portals">
            <button className="nav-portal-label">School portals <ChevronDown size={15} /></button>
            <div className="portal-dropdown">
              <Link to="/portal/student">Student portal</Link><Link to="/portal/parent">Parent portal</Link>
              <Link to="/portal/staff">Staff portal</Link><Link to="/portal/admin">Admin portal</Link>
              <Link to="/results">Check results</Link>
            </div>
          </div>
          <Link className="btn btn-small btn-gold nav-apply" to="/admissions" onClick={() => setOpen(false)}>Apply for admission</Link>
        </nav>
      </div>
    </header>
  </>;
}
