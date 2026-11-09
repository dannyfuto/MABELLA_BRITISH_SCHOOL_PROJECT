import React from 'react';
import { Link } from 'react-router';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Brand from './Brand.jsx';
export default function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Brand /><p className="footer-about">A caring learning community committed to academic excellence, strong character and the discovery of every child's potential.</p></div>
    <div><h4>Explore</h4><Link to="/about">About our school</Link><Link to="/academics">Our academics</Link><Link to="/facilities">School facilities</Link><Link to="/admissions">Admissions</Link></div>
    <div><h4>School portals</h4><Link to="/portal/student">Student portal</Link><Link to="/portal/parent">Parent portal</Link><Link to="/portal/staff">Staff portal</Link><Link to="/portal/admin">Admin portal</Link><Link to="/results">Result checker</Link></div>
    <div><h4>Get in touch</h4><p><MapPin size={16}/> Umuguma, Owerri, Imo State</p><p><Phone size={16}/> Add school phone number</p><p><Mail size={16}/> Add school email address</p><Link className="footer-link" to="/contact">Contact the school <ArrowUpRight size={15}/></Link></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Mabella British School. All rights reserved.</span><span>Building Excellence, Inspiring Greatness.</span></div></footer>;
}
