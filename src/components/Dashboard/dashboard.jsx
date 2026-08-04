import "./dashboard.css";
import Sidebar from "../common/Sidebar";
import { useNavigate } from "react-router-dom";

import saveProducts from "../../assets/dashboardassets/save products.png";
import stockProducts from "../../assets/dashboardassets/stock products.png";
import salesProducts from "../../assets/dashboardassets/salesproduct.png";
import jobApplication from "../../assets/dashboardassets/jobapplication.png";

import cameraLens from "../../assets/dashboardassets/cameralens.png";
import blackDress from "../../assets/dashboardassets/Blackdress.png";
import arganOil from "../../assets/dashboardassets/arganoil.png";
import eauDe from "../../assets/dashboardassets/eau de.png";

import shoes from "../../assets/dashboardassets/shoes.png";
import stars from "../../assets/dashboardassets/stars1.png";

import iphone12 from "../../assets/dashboardassets/iphone12.png";
import iphoneStars from "../../assets/dashboardassets/iphone12stars.png";

const Dashboard = () => {

  const navigate = useNavigate();
  return (
    <div className="dashboard-page">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="dashboard-main">

        {/* Header */}
        <div className="dashboard-header">

          <h1>Dashboard</h1>

          <div className="date-select">

            <select>
              <option>10-06-2021</option>
            </select>

            <select>
              <option>10-10-2021</option>
            </select>

          </div>

        </div>

        {/* Statistics */}
        <div className="cards-grid">

          <div className="stat-card">

            <div className="icon-circle blue">
              <img src={saveProducts} alt="Save Products" />
            </div>

            <div>
              <h2>178+</h2>
              <p>Save Products</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="icon-circle yellow">
              <img src={stockProducts} alt="Stock Products" />
            </div>

            <div>
              <h2>20+</h2>
              <p>Stock Products</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="icon-circle orange">
              <img src={salesProducts} alt="Sales Products" />
            </div>

            <div>
              <h2>190+</h2>
              <p>Sales Products</p>
            </div>

          </div>

          <div className="stat-card">

            <div className="icon-circle purple">
              <img src={jobApplication} alt="Job Application" />
            </div>

            <div>
              <h2>12+</h2>
              <p>Job Application</p>
            </div>

          </div>

        </div>

        {/* Reports & Analytics */}
        <div className="graph-wrapper">

          <div className="report-card">
            <div className="report-card-header">
              <h3>Reports</h3>
              <span className="report-more">•••</span>
            </div>

            <div className="report-chart-visual">
              <div className="report-chart-wrapper">
                <div className="report-chart-yaxis">
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>
                <div className="report-chart-main">
                  <div className="report-chart-svg-wrapper">
                    <svg
                      viewBox="0 0 900 360"
                      className="report-chart-svg"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="lightLine" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#4CB5FF" />
                          <stop offset="100%" stopColor="#C266FF" />
                        </linearGradient>
                        <linearGradient id="shadowFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4CB5FF" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <g className="report-chart-grid-lines">
                        <line x1="60" y1="60" x2="860" y2="60" />
                        <line x1="60" y1="110" x2="860" y2="110" />
                        <line x1="60" y1="160" x2="860" y2="160" />
                        <line x1="60" y1="210" x2="860" y2="210" />
                        <line x1="60" y1="260" x2="860" y2="260" />
                        <line x1="60" y1="310" x2="860" y2="310" />
                      </g>
                      <path
                        className="report-chart-fill"
                        d="M60 263 C120 240 180 180 240 205 C300 220 360 100 420 170 C480 230 540 190 600 240 C660 280 720 190 780 110 C840 90 860 90 860 320 L860 320 L60 320 Z"
                      />
                      <path
                        className="report-chart-line"
                        d="M60 263 C120 240 180 180 240 205 C300 220 360 100 420 170 C480 230 540 190 600 240 C660 280 720 190 780 110 C840 90"
                      />
                      <circle className="report-chart-point" cx="60" cy="263" r="8" />
                      <circle className="report-chart-point" cx="120" cy="240" r="8" />
                      <circle className="report-chart-point" cx="180" cy="180" r="8" />
                      <circle className="report-chart-point" cx="240" cy="205" r="8" />
                      <circle className="report-chart-point" cx="300" cy="220" r="8" />
                      <circle className="report-chart-point" cx="360" cy="100" r="8" />
                      <circle className="report-chart-point" cx="420" cy="170" r="8" />
                      <circle className="report-chart-point" cx="480" cy="230" r="8" />
                      <circle className="report-chart-point" cx="540" cy="190" r="8" />
                      <circle className="report-chart-point" cx="600" cy="240" r="8" />
                      <circle className="report-chart-point" cx="660" cy="280" r="8" />
                      <circle className="report-chart-point" cx="720" cy="190" r="8" />
                      <circle className="report-chart-point" cx="780" cy="110" r="8" />
                      <circle className="report-chart-point" cx="840" cy="90" r="8" />
                    </svg>
                    <div className="report-tooltip">
                      <div className="tooltip-card">
                        <span>Sales</span>
                        <strong>2,678</strong>
                      </div>
                      <div className="tooltip-arrow" />
                    </div>
                  </div>
                  <div className="report-chart-xaxis">
                    <span>10am</span>
                    <span>11am</span>
                    <span>12am</span>
                    <span>01am</span>
                    <span>02am</span>
                    <span>03am</span>
                    <span>04am</span>
                    <span>05am</span>
                    <span>06am</span>
                    <span>07am</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <div className="analytics-card-header">
              <div>
                <h3>Analytics</h3>
                <p>Transactions performance</p>
              </div>
            </div>
            <div className="analytics-donut-chart">
              <div className="analytics-donut-wrapper">
                <svg
                  viewBox="0 0 220 220"
                  className="analytics-donut-svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="110" cy="110" r="80" className="donut-bg" />
                  <circle
                    cx="110"
                    cy="110"
                    r="80"
                    className="donut-segment donut-sale"
                    strokeDasharray="200 502"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="80"
                    className="donut-segment donut-distribute"
                    strokeDasharray="140 502"
                    strokeDashoffset="-200"
                  />
                  <circle
                    cx="110"
                    cy="110"
                    r="80"
                    className="donut-segment donut-return"
                    strokeDasharray="120 502"
                    strokeDashoffset="-340"
                  />
                  <circle cx="110" cy="110" r="58" className="donut-center-circle" />
                </svg>
                <div className="analytics-donut-center">
                  <span>80%</span>
                  <p>Transactions</p>
                </div>
              </div>
              <div className="analytics-donut-legend">
                <div className="analytics-donut-legend-item">
                  <span className="legend-dot sale" /> Sale
                </div>
                <div className="analytics-donut-legend-item">
                  <span className="legend-dot distribute" /> Distribute
                </div>
                <div className="analytics-donut-legend-item">
                  <span className="legend-dot return" /> Return
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="bottom-grid">

          {/* Recent Orders */}
          <div className="orders-card">

            <div className="card-title">
              <h2>Recent Orders</h2>
              <span>•••</span>
            </div>

            <table>

              <thead>

                <tr>
                  <th>Tracking No</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Total Order</th>
                  <th>Total Amount</th>
                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>#876364</td>

                  <td className="product">
                    <img src={cameraLens} alt="Camera Lens" />
                    Camera Lens
                  </td>

                  <td>$178</td>

                  <td>
                    <span className="order-badge">325</span>
                  </td>

                  <td>$1,46,660</td>

                </tr>

                <tr>

                  <td>#876368</td>

                  <td className="product">
                    <img src={blackDress} alt="Black Dress" />
                    Black Sleep Dress
                  </td>

                  <td>$14</td>

                  <td>
                    <span className="order-badge">53</span>
                  </td>

                  <td>$46,660</td>

                </tr>

                <tr>

                  <td>#876412</td>

                  <td className="product">
                    <img src={arganOil} alt="Argan Oil" />
                    Argan Oil
                  </td>

                  <td>$21</td>

                  <td>
                    <span className="order-badge">78</span>
                  </td>

                  <td>$3,46,676</td>

                </tr>

                <tr>

                  <td>#876621</td>

                  <td className="product">
                    <img src={eauDe} alt="EAU DE Parfum" />
                    EAU DE Parfum
                  </td>

                  <td>$32</td>

                  <td>
                    <span className="order-badge">98</span>
                  </td>

                  <td>$3,46,981</td>

                </tr>

              </tbody>

            </table>

          </div>

          {/* Top Selling Products */}
          <div className="top-products">

            <div className="card-title">

  <h2>Top Selling Products</h2>

  <span
    className="top-products-menu"
    onClick={() => navigate("/product-analytics")}
  >
    •••
  </span>

</div>
            <div className="selling-item">

              <img src={shoes} alt="Nike Shoes" />

              <div>

                <h3>NIKE Shoes Black Pattern</h3>

                <img
                  src={stars}
                  alt="Rating"
                  className="stars"
                />

                <h4>$87</h4>

              </div>

            </div>

            <div className="selling-item">

              <img src={iphone12} alt="iPhone 12" />

              <div>

                <h3>iPhone 12</h3>

                <img
                  src={iphoneStars}
                  alt="Rating"
                  className="stars"
                />

                <h4>$987</h4>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;