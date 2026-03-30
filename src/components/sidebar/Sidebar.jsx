// src/components/sidebar/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { IoPersonCircleOutline, IoChatbubbleOutline, IoSearchOutline, IoLockClosedOutline } from 'react-icons/io5';

const Sidebar = () => {
  const handleLogout = () => {
    alert('로그아웃 되었습니다. (추후 API 연동)');
  };

  return (
    <nav className="sidebar-container">
      
      <div className="profile-section">
        <IoPersonCircleOutline className="profile-large-icon" />
        <div className="profile-info">
          <div className="profile-name">내 프로필</div>
          <div className="profile-status">상태메세지</div>
        </div>
      </div>

      
      <div className="menu-section">
        <NavLink to="/chat" className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
          <IoChatbubbleOutline className="menu-icon" />
          <span>채팅</span>
        </NavLink>

        <NavLink to="/" className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}>
          <IoSearchOutline className="menu-icon" />
          <span>검색</span>
        </NavLink>

    
        <button className="menu-item logout-menu-btn" onClick={handleLogout}>
          <IoLockClosedOutline className="menu-icon" />
          <span>로그아웃</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;