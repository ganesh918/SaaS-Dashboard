import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";

import "./Sidebar.css";

import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import baseLogo from "../../assets/dashboardassets/base logo.png";
import dashboardIcon from "../../assets/dashboardassets/dashboard.png";
import analyticsIcon from "../../assets/dashboardassets/analytics.png";
import invoiceIcon from "../../assets/dashboardassets/invoice.png";
import calendarIcon from "../../assets/dashboardassets/Calendar.png";
import notificationIcon from "../../assets/dashboardassets/Notification.png";
import settingIcon from "../../assets/dashboardassets/Setting.png";
import logoutIcon from "../../assets/dashboardassets/Logout.png";

import hero from "../../assets/dashboardassets/easin arafat.png";
import upgrade from "../../assets/dashboardassets/upgrade.png";

const Sidebar = () => {

const [isOpen, setIsOpen] = useState(false);

const closeMobile = () => setIsOpen(false);
const openMobile = () => setIsOpen(true);

useEffect(() => {
  if (isOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}, [isOpen]);

const navigate = useNavigate();

const { logout } = useAuth();

const handleLogout = () => {

    logout();

    navigate("/login");

};
  return (
    <>
      <button
        className="sidebar-toggle"
        aria-label="Open menu"
        onClick={openMobile}
      >
        <FiMenu />
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="sidebar-close" aria-label="Close menu" onClick={closeMobile}>
          <FiX />
        </button>

      <div>

        {/* ===========================
                LOGO
        ============================ */}

        <div className="sidebar-logo">

          <img
            src={baseLogo}
            alt="Base Logo"
          />

          <h2>

            Base

          </h2>

        </div>

        {/* ===========================
                MENU
        ============================ */}

        <ul className="sidebar-menu">

          {/* Dashboard */}

          <li>

            <NavLink
              to="/"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <div className="sidebar-left">

                <img
                  src={dashboardIcon}
                  alt="Dashboard"
                />

                <span>

                  Dashboard

                </span>

              </div>

            </NavLink>

          </li>

          {/* Analytics */}

          <li>

            <NavLink
              to="/analytics"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <div className="sidebar-left">

                <img
                  src={analyticsIcon}
                  alt="Analytics"
                />

                <span>

                  Analytics

                </span>

              </div>

            </NavLink>

          </li>

          {/* Invoice */}

          <li>

            <NavLink
              to="/invoice"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <div className="sidebar-left">

                <img
                  src={invoiceIcon}
                  alt="Invoice"
                />

                <span>

                  Invoice

                </span>

              </div>

            </NavLink>

          </li>

          {/* Schedule */}

          <li>

            <NavLink
              to="/schedule"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <div className="sidebar-left">

                <img
                  src={calendarIcon}
                  alt="Schedule"
                />

                <span>

                  Schedule

                </span>

              </div>

            </NavLink>

          </li>

          {/* Calendar */}

          <li>

            <NavLink
              to="/calendar"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <div className="sidebar-left">

                <img
                  src={calendarIcon}
                  alt="Calendar"
                />

                <span>

                  Calendar

                </span>

              </div>

            </NavLink>

          </li>

          {/* Messages */}

          <li>

            <NavLink
              to="/messages"
              onClick={closeMobile}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <div className="sidebar-left">

                <img
                  src={analyticsIcon}
                  alt="Messages"
                />

                <span>

                  Messages

                </span>

              </div>

              <div className="message-count">

                49

              </div>

            </NavLink>

          </li>

          {/* Notification */}

          <li>

            <NavLink
              to="/notification"
              onClick={closeMobile}
              className="sidebar-link"
            >

              <div className="sidebar-left">

                <img
                  src={notificationIcon}
                  alt="Notification"
                />

                <span>

                  Notification

                </span>

              </div>

            </NavLink>

          </li>

         {/* Settings */}

<li>

  <NavLink
    to="/settings"
    onClick={closeMobile}
    className={({ isActive }) =>
      isActive ? "sidebar-link active" : "sidebar-link"
    }
  >

    <div className="sidebar-left">

      <img
        src={settingIcon}
        alt="Settings"
      />

      <span>

        Settings

      </span>

    </div>

  </NavLink>

</li>

        </ul>

        {/* ===========================
              UPGRADE CARD
        ============================ */}

        <div className="upgrade-card">

          <img
            src={upgrade}
            alt="Upgrade"
            className="upgrade-image"
          />

          <button className="upgrade-btn">

            Upgrade Now

          </button>

        </div>

      </div>

      {/* ===========================
            PROFILE
      ============================ */}

      <div className="sidebar-profile">

        <div className="profile-left">

          <img
            src={hero}
            alt="Profile"
          />

          <div>

            <h4>

              Easin Arafat

            </h4>

            <p>

              Free Account

            </p>

          </div>

        </div>

        <img
    src={logoutIcon}
    alt="Logout"
    className="logout-icon"
    onClick={handleLogout}
/>

      </div>

    </aside>
    <div className={`sidebar-backdrop ${isOpen ? 'show' : ''}`} onClick={closeMobile}></div>

    </>
  );

};

export default Sidebar;