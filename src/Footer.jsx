import React from 'react';
import { NavLink } from 'react-router-dom';
import Archive from './pages/Archive';
import NumberKey from './pages/NumberKey';
import Outbox from './pages/Outbox';
import Settings from './pages/Settings';
import Voicemail from './pages/Voicemail';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="d-flex justify-content-between px-3">
        <NavLink to="/Outbox" className="nav-link">
          <i className="bi bi-telephone-fill fs-5"></i>
        </NavLink>
        <NavLink to="/Archive" className="nav-link">
          <i className="bi bi-person-circle fs-5"></i>
        </NavLink>
        <NavLink to="/NumberKey" className="nav-link">
          <i className="bi bi-grid-3x3-gap-fill fs-1"></i>
        </NavLink>
        <NavLink to="/Settings" className="nav-link">
          <i className="bi bi-gear-fill fs-5"></i>
        </NavLink>
        <NavLink to="/Voicemail" className="nav-link">
          <i className="bi bi-record-circle fs-5"></i>
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
