import React from 'react';
import { NavLink } from 'react-router-dom'; // Changed href to NavLink for SPA

const Sidebar = ({ activePage, isCollapsed, toggleSidebar }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'fa-gauge-high' },
        { id: 'products', label: 'Products', icon: 'fa-box' },
        { id: 'orders', label: 'Orders', icon: 'fa-shopping-cart' },
        { id: 'analytics', label: 'Sales Analytics', icon: 'fa-chart-line' },
        { id: 'profile', label: 'Profile', icon: 'fa-user' },
        { id: 'help', label: 'Help', icon: 'fa-circle-question' }
    ];

    return (
        <div className={`sidebar p-3 text-white ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
            <div className="d-flex align-items-center justify-content-between mb-4 px-1">
                <div className="d-flex align-items-center">
                    <i className="fas fa-store fs-4 me-2" style={{ color: '#01c64b' }}></i>
                    <h1 className="fs-5 fw-bold m-0 sidebar-header-text">Bio Coders</h1>
                </div>
                <button className="btn btn-sm text-black bg-white p-1 hover-effect" onClick={toggleSidebar}>
                    <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
                </button>
            </div>
            <nav className="nav flex-column">
                {navItems.map(item => (
                    <NavLink
                        key={item.id}
                        className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                        to={item.id}
                    >
                        <i className={`fas ${item.icon}`}></i>
                        <span className="nav-item-text">{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;