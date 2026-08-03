import "./ProductAnalytics.css";
import Sidebar from "../common/Sidebar";

import {
  FiChevronDown,
  FiPlus,
  FiMoreHorizontal,
  FiTrendingUp,
  FiShoppingCart,
} from "react-icons/fi";

import { FaMedal } from "react-icons/fa";

import productBox from "../../assets/productAnalytics/product-box.png";

import bluetooth from "../../assets/productAnalytics/bluetooth.png";
import airdot from "../../assets/productAnalytics/airdot.png";
import shoes from "../../assets/productAnalytics/shoes.png";
import tshirt from "../../assets/productAnalytics/tshirt.png";
import watch from "../../assets/productAnalytics/watch.png";
import girlsTop from "../../assets/productAnalytics/girls-top.png";

const ProductAnalytics = () => {

  const products = [

    {
      id:1,
      rank:<FaMedal />,
      image:bluetooth,
      name:"Bluetooth Devices",
      price:"$10",
      order:"34,666 Piece",
      sales:"$3,46,660",
    },

    {
      id:2,
      rank:<FaMedal />,
      image:airdot,
      name:"Airdot",
      price:"$15",
      order:"20,000 Piece",
      sales:"$3,00,000",
    },

    {
      id:3,
      rank:<FaMedal />,
      image:shoes,
      name:"Shoes",
      price:"$10",
      order:"15,000 Piece",
      sales:"$1,50,000",
    },

    {
      id:4,
      rank:"4",
      image:tshirt,
      name:"Kids T-Shirt",
      price:"$12",
      order:"10,000 Piece",
      sales:"$1,20,000",
    },

    {
      id:5,
      rank:"5",
      image:watch,
      name:"Smart Watch",
      price:"$12",
      order:"10,000 Piece",
      sales:"$1,20,000",
    },

    {
      id:6,
      rank:"5",
      image:girlsTop,
      name:"Girls Top",
      price:"$12",
      order:"10,000 Piece",
      sales:"$1,20,000",
    },

  ];

  return(

    <div className="pa-page">

      <Sidebar />

      <main className="pa-main">

        <div className="pa-header">

          <div>

            <h1>Product Analytics</h1>

            <div className="pa-tabs">

              <button className="active">

                Product

              </button>

              <button>

                Customer

              </button>

            </div>

          </div>

          <div className="pa-header-actions">

            <div className="pa-date">

              <span>10-06-2021</span>

              <FiChevronDown />

            </div>

            <div className="pa-date">

              <span>10-10-2021</span>

              <FiChevronDown />

            </div>

            <button className="pa-add-btn">

              <FiPlus />

              Add Product

            </button>

          </div>

        </div>
                {/* ===========================
            Statistics Cards
        ============================ */}

        <section className="pa-statistics">

          <div className="pa-stat-card">

            <div className="pa-card-top">

              <div className="pa-card-left">

                <div className="pa-card-icon product-icon">

                  <img
                    src={productBox}
                    alt="Product"
                  />

                </div>

                <div className="pa-card-text">

                  <p>Total Product</p>

                  <h2>5,00,874</h2>

                </div>

              </div>

              <div className="pa-badge">

                +1400 New Added

              </div>

            </div>

            <div className="pa-graph pa-graph-product">

              <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="pa-graph-svg">
                <defs>
                  <linearGradient id="productGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4b6bfb" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#4b6bfb" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,70 C60,70 60,40 120,50 C180,60 180,35 240,40 C280,45 300,35 300,35 L300,120 L0,120 Z" fill="url(#productGradient)" />
                <path d="M0,70 C60,70 60,40 120,50 C180,60 180,35 240,40 C280,45 300,35" fill="none" stroke="#4b6bfb" strokeWidth="4" strokeLinecap="round" />
              </svg>

            </div>

          </div>

          <div className="pa-stat-card">

            <div className="pa-card-top">

              <div className="pa-card-left">

                <div className="pa-card-icon sales-icon">
                  <FiShoppingCart />
                </div>

                <div className="pa-card-text">

                  <p>Total Sales</p>

                  <h2>2,34,888</h2>

                </div>

              </div>

              <div className="pa-badge">

                +1000 Sales Today

              </div>

            </div>

            <div className="pa-graph pa-graph-sales">

              <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="pa-graph-svg">
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,75 C60,75 60,50 120,60 C180,70 180,50 240,55 C280,58 300,45 300,45 L300,120 L0,120 Z" fill="url(#salesGradient)" />
                <path d="M0,75 C60,75 60,50 120,60 C180,70 180,50 240,55 C280,58 300,45" fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              </svg>

            </div>

          </div>

        </section>

        {/* ===========================
            Main Content
        ============================ */}

        <section className="pa-content">

          {/* Left Section */}

          <div className="pa-left">

            <div className="pa-products-card">

              <div className="pa-products-header">

                <h2>

                  Top Selling Products

                </h2>

                <button>

                  See More

                </button>

              </div>
                            <table className="pa-table">

                <thead>

                  <tr>

                    <th>
                      SN
                      <FiChevronDown />
                    </th>

                    <th>
                      Name
                      <FiChevronDown />
                    </th>

                    <th>
                      Price
                      <FiChevronDown />
                    </th>

                    <th>
                      Total Order
                      <FiChevronDown />
                    </th>

                    <th>
                      Total Sales
                      <FiChevronDown />
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {products.map((item) => (

                    <tr key={item.id}>

                      <td className="pa-rank">

                        {item.rank}

                      </td>

                      <td>

                        <div className="pa-product">

                          <div className="pa-product-image">

                            <img
                              src={item.image}
                              alt={item.name}
                            />

                          </div>

                          <span>

                            {item.name}

                          </span>

                        </div>

                      </td>

                      <td>

                        {item.price}

                      </td>

                      <td>

                        {item.order}

                      </td>

                      <td className="pa-sales">

                        {item.sales}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>
                    {/* ===========================
              Right Section
          ============================ */}

          <div className="pa-right">

            {/* Product Add by Month */}

            <div className="pa-month-card">

              <div className="pa-month-header">

                <h2>Product Add by Month</h2>

                <button>

                  <FiMoreHorizontal />

                </button>

              </div>

              <div className="pa-bar-chart">

                <div className="pa-bar-item">
                  <div className="pa-bar-row">
                    <span className="pa-month-label">Jan</span>
                    <div className="pa-bar pa-bar-orange pa-bar-jan"></div>
                    <span className="pa-bar-value">23,400</span>
                  </div>
                </div>

                <div className="pa-bar-item">
                  <div className="pa-bar-row">
                    <span className="pa-month-label">Feb</span>
                    <div className="pa-bar pa-bar-blue pa-bar-feb"></div>
                    <span className="pa-bar-value">15,000</span>
                  </div>
                </div>

                <div className="pa-bar-item">
                  <div className="pa-bar-row">
                    <span className="pa-month-label">Mar</span>
                    <div className="pa-bar pa-bar-orange pa-bar-mar"></div>
                    <span className="pa-bar-value">30,000</span>
                  </div>
                </div>

                <div className="pa-bar-item">
                  <div className="pa-bar-row">
                    <span className="pa-month-label">Apr</span>
                    <div className="pa-bar pa-bar-blue pa-bar-apr"></div>
                    <span className="pa-bar-value">22,000</span>
                  </div>
                </div>

                <div className="pa-bar-item">
                  <div className="pa-bar-row">
                    <span className="pa-month-label">May</span>
                    <div className="pa-bar pa-bar-blue pa-bar-may"></div>
                    <span className="pa-bar-value">10,000</span>
                  </div>
                </div>

                <div className="pa-bar-item">
                  <div className="pa-bar-row">
                    <span className="pa-month-label">Jun</span>
                    <div className="pa-bar pa-bar-orange pa-bar-jun"></div>
                    <span className="pa-bar-value">23,400</span>
                  </div>
                </div>

                <div className="pa-bar-item">
                  <div className="pa-bar-row">
                    <span className="pa-month-label">Jul</span>
                    <div className="pa-bar pa-bar-blue pa-bar-jul"></div>
                    <span className="pa-bar-value">5,000</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Product Sales Analytics */}

            <div className="pa-sales-card">

              <div className="pa-sales-header">

                <h2>Product Sales Analytics</h2>

                <button>

                  <FiMoreHorizontal />

                </button>

              </div>

              <div className="pa-donut-wrapper">

                <div className="pa-donut-chart">
                  <div className="pa-donut-ring">
                    <div className="pa-donut-center">
                      <FiTrendingUp />
                    </div>
                  </div>
                </div>

                <div className="pa-donut-legend">

                  <div className="pa-legend-item">
                    <span className="pa-dot pa-blue"></span>
                    <p>Total Sales</p>
                  </div>

                  <div className="pa-legend-item">
                    <span className="pa-dot pa-yellow"></span>
                    <p>Total Order</p>
                  </div>

                  <div className="pa-legend-item">
                    <span className="pa-dot pa-orange"></span>
                    <p>Order Cancel</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
              </main>

    </div>

  );

};

export default ProductAnalytics;