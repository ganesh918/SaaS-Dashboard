import { useState, useRef, useEffect } from "react";
import "./Analytics.css";
import Sidebar from "../common/Sidebar";

import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin, FiUsers, FiTrendingUp, FiDollarSign } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { HiOutlineCamera } from "react-icons/hi";

import john from "../../assets/analyticsassets/john.png";
import shelby from "../../assets/analyticsassets/shelby.png";
import robert from "../../assets/analyticsassets/robert.png";
import johncarilo from "../../assets/analyticsassets/johncarilo.png";
import adriene from "../../assets/analyticsassets/adriene.png";
import jhon from "../../assets/analyticsassets/jhon.png";
import mark from "../../assets/analyticsassets/mark.png";
import bethany from "../../assets/analyticsassets/bethany.png";
import christine from "../../assets/analyticsassets/christine.png";
import anne from "../../assets/analyticsassets/anne.png";
import james from "../../assets/analyticsassets/james.png";

import profile from "../../assets/analyticsassets/profile.png";
import performanceChart from "../../assets/analyticsassets/performance-chart.png";
import progress70 from "../../assets/analyticsassets/progress70.png";
import progress60 from "../../assets/analyticsassets/progress60.png";

const customers = [
  {
    image: john,
    name: "John Deo",
    email: "johndoe2211@gmail.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    image: shelby,
    name: "Shelby Goode",
    email: "shelbygoode481@gmail.com",
    phone: "+33757005467",
    gender: "Female",
  },
  {
    image: robert,
    name: "Robert Bacins",
    email: "robertbacins4182@.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    image: johncarilo,
    name: "John Carilo",
    email: "johncarilo182@.com",
    phone: "+33757805467",
    gender: "Male",
  },
  {
    image: adriene,
    name: "Adriene Watson",
    email: "adrienewatson82@.com",
    phone: "+83757305467",
    gender: "Female",
  },
  {
    image: jhon,
    name: "Jhon Deo",
    email: "jhondeo24823@.com",
    phone: "+63475700546",
    gender: "Male",
  },
  {
    image: mark,
    name: "Mark Ruffalo",
    email: "markruffalo3735@.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    image: bethany,
    name: "Bethany Jackson",
    email: "bethanyjackson5@.com",
    phone: "+33757005467",
    gender: "Female",
  },
  {
    image: christine,
    name: "Christine Huston",
    email: "christinehuston4@.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    image: anne,
    name: "Anne Jacob",
    email: "annejacob2@ummoh.com",
    phone: "+33757005467",
    gender: "Male",
  },
  {
    image: james,
    name: "James Mullican",
    email: "jamesmullican5346@.com",
    phone: "+33757005467",
    gender: "Male",
  },
];

const Analytics = () => {

  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

const menuRef = useRef(null);

useEffect(() => {

    const handleClickOutside = (event) => {

        if (menuRef.current && !menuRef.current.contains(event.target)) {

            setActiveMenu(null);

        }

    };

    document.addEventListener("click", handleClickOutside);

    return () => {

        document.removeEventListener("click", handleClickOutside);

    };

}, []);

  return (

    <div className="analytics-page">

      <Sidebar />

      <main className="analytics-main">

        <div className="analytics-header">

          <h1>Customer List</h1>

          <button
            className="add-customer-btn"
            onClick={() => setShowAddCustomer(true)}
          >
            + Add Customer
          </button>

        </div>

        <div
          className={
            showAddCustomer
              ? "analytics-content panel-open"
              : "analytics-content"
          }
        >

          <section className="customers-section">

            <div className="customer-table">

              <div className="table-header">

                <div className="header-name">
                  Name
                  <IoMdArrowDropdown />
                </div>

                <div className="header-email">
                  Email
                  <IoMdArrowDropdown />
                </div>

                <div className="header-phone">
                  Phone Number
                  <IoMdArrowDropdown />
                </div>

                <div className="header-gender">
                  Gender
                  <IoMdArrowDropdown />
                </div>

                <div></div>

              </div>
                            {customers.map((customer, index) => (

                <div
                  className="customer-row"
                  key={index}
                >

                  <div className="customer-name">

                    <img
                      src={customer.image}
                      alt={customer.name}
                    />

                    <span>
                      {customer.name}
                    </span>

                  </div>

                  <div className="customer-email">

                    {customer.email}

                  </div>

                  <div className="customer-phone">

                    {customer.phone}

                  </div>

                  <div className="customer-gender">

                    <span
                      className={
                        customer.gender === "Male"
                          ? "gender male"
                          : "gender female"
                      }
                    >
                      {customer.gender}
                    </span>

                  </div>

                  <div
    className="customer-menu"
    ref={menuRef}
>

    <button
        className="menu-btn"
        onClick={(e) => {

            e.stopPropagation();

            setActiveMenu(
                activeMenu === index
                    ? null
                    : index
            );

        }}
    >

        <BsThreeDotsVertical />

    </button>

    {activeMenu === index && (

        <div className="menu-dropdown">

            <button className="menu-item edit-item">

                ✏️

                <span>Edit</span>

            </button>

            <button className="menu-item delete-item">

                🗑️

                <span>Delete</span>

            </button>

        </div>

    )}

</div>

                </div>

              ))}

            </div>

          </section>

          {!showAddCustomer && (

            <aside className="profile-section">

              <div className="profile-card">

                <img
                  src={profile}
                  alt="Profile"
                  className="profile-image"
                />

                <h2>John Deo</h2>

                <p>UI/UX Designer</p>

              </div>

              <div className="contact-card">

                <h3>Contact Info</h3>

                <div className="contact-item">

                  <HiOutlineMail />

                  <span>
                    kajope5182@ummoh.com
                  </span>

                </div>

                <div className="contact-item">

                  <FiPhone />

                  <span>
                    +33757005467
                  </span>

                </div>

                <div className="contact-item">

                  <FiMapPin />

                  <span>

                    2239 Hog Camp Road

                    <br />

                    Schaumburg

                  </span>

                </div>

              </div>

              <div className="performance-card">

                <div className="performance-header">

                  <h3>Performance</h3>

                  <BsThreeDotsVertical />

                </div>

                <img
                  src={performanceChart}
                  alt="Performance"
                  className="performance-chart"
                />

              </div>

              <div className="progress-wrapper">

                <div className="progress-card">

                  <img
                    src={progress70}
                    alt="Project Completed"
                    className="progress-image"
                  />

                  <h4>70%</h4>

                  <p>Project Completed</p>

                </div>

                <div className="progress-card">

                  <img
                    src={progress60}
                    alt="Running Project"
                    className="progress-image"
                  />

                  <h4>60%</h4>

                  <p>Running Project</p>

                </div>

              </div>

            </aside>

          )}
                    {showAddCustomer && (

            <aside className="add-customer-panel">

              <div className="panel-header">

                <h2>Add Customer</h2>

                <button
                  className="close-panel"
                  onClick={() => setShowAddCustomer(false)}
                >
                  <IoClose />
                </button>

              </div>

              <div className="upload-wrapper">

                <div className="upload-circle">

                  <HiOutlineCamera />

                </div>

                <p>Upload Photo</p>

              </div>

              <form className="customer-form">

                <div className="form-group">

                  <label>First Name</label>

                  <input
                    type="text"
                    placeholder="John"
                  />

                </div>

                <div className="form-group">

                  <label>Last Name</label>

                  <input
                    type="text"
                    placeholder="Deo"
                  />

                </div>

                <div className="form-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="example@gmail.com"
                  />

                </div>

                <div className="form-group">

                  <label>Phone Number</label>

                  <input
                    type="text"
                    placeholder="+33757005467"
                  />

                </div>

                <div className="form-group">

                  <label>Gender</label>

                  <select
                    defaultValue=""
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select Gender
                    </option>

                    <option>
                      Male
                    </option>

                    <option>
                      Female
                    </option>

                  </select>

                </div>

                <button
                  type="submit"
                  className="submit-btn"
                >
                  Add Customer
                </button>

              </form>

            </aside>

          )}
                  </div>

      </main>

    </div>

  );

};

export default Analytics;