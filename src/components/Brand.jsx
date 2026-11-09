import React from 'react';
import { Link } from 'react-router';
import { GraduationCap } from 'lucide-react';

export default function Brand() {
  return <Link to="/" className="brand" aria-label="Mabella British School home">
    <span className="brand-mark"><GraduationCap size={27} strokeWidth={1.8} /></span>
    <span className="brand-copy"><strong>MABELLA</strong><small>BRITISH SCHOOL</small></span>
  </Link>;
}
