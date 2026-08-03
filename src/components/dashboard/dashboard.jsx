import "./dashboard.css";
import Sidebar from "../common/Sidebar";
import { useNavigate } from "react-router-dom";

import saveProducts from "../../assets/dashboardassets/save products.png";
import stockProducts from "../../assets/dashboardassets/stock products.png";
import salesProducts from "../../assets/dashboardassets/salesproduct.png";
import jobApplication from "../../assets/dashboardassets/jobapplication.png";

import reportsChart from "../../assets/dashboardassets/reports-chart.png";
import analytics2 from "../../assets/dashboardassets/analytics2.png";

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
            <img
              src={reportsChart}
              alt="Reports"
              className="reports-chart-image"
            />
          </div>

          <div className="analytics-card">
            <img
              src={analytics2}
              alt="Analytics"
              className="analytics-image"
            />
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