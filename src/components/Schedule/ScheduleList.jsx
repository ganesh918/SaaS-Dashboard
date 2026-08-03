import "./ScheduleList.css";

import Sidebar from "../common/Sidebar";

import { useState } from "react";

import {
  FiSearch,
  FiPlus,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

import avatar1 from "../../assets/schedule/avatar1.png";
import avatar2 from "../../assets/schedule/avatar2.png";
import avatar3 from "../../assets/schedule/avatar3.png";

const ScheduleList = () => {

  const [people] = useState([

    {
      id:1,
      name:"Eddie Lobanovskiy",
      email:"laboanovskiy@gmail.com",
      avatar:avatar1,
    },

    {
      id:2,
      name:"Alexey Stave",
      email:"alexeyst@gmail.com",
      avatar:avatar2,
    },

    {
      id:3,
      name:"Anton Tachev",
      email:"tkacheveanton@gmail.com",
      avatar:avatar3,
    },

  ]);

  const [schedule] = useState([

    {
      id:1,
      date:"12 Dec, 2021",
      time:"10.15AM",
      location:"Office Meeting",
    },

    {
      id:2,
      date:"10 Dec, 2021",
      time:"11.20AM",
      location:"Home",
    },

    {
      id:3,
      date:"09 Dec, 2021",
      time:"11.45AM",
      location:"Friends Zone",
    },

    {
      id:4,
      date:"08 Dec, 2021",
      time:"12.15PM",
      location:"Office Meeting",
    },

    {
      id:5,
      date:"07 Dec, 2021",
      time:"01.20PM",
      location:"Home",
    },

    {
      id:6,
      date:"05 Dec, 2021",
      time:"10.15AM",
      location:"Meeting Outside",
    },

    {
      id:7,
      date:"04 Dec, 2021",
      time:"11.15AM",
      location:"Office Meeting",
    },

    {
      id:8,
      date:"04 Dec, 2021",
      time:"01.25PM",
      location:"Home",
    },

    {
      id:9,
      date:"02 Dec, 2021",
      time:"10.15AM",
      location:"Friends",
    },

    {
      id:10,
      date:"01 Dec, 2021",
      time:"04.30PM",
      location:"Meeting Outside",
    },

  ]);

  return (

    <div className="schedule-list-page">

      <Sidebar />

      <main className="schedule-list-main">

        <div className="schedule-list-header">

          <h1>Schedule List</h1>

          <button className="add-new-btn">

            <FiPlus />

            Add New

          </button>

        </div>

        <div className="schedule-content">

          <aside className="schedule-left-panel">

            <button className="create-schedule-btn">

              <FiPlus />

              Create Schedule

            </button>
                        <div className="calendar-card">

              <div className="calendar-header">

                <span>December 2, 2021</span>

                <div className="calendar-arrows">

                  <span>&lt;</span>

                  <span>&gt;</span>

                </div>

              </div>

              <table className="calendar-table">

                <thead>

                  <tr>

                    <th>S</th>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>29</td>
                    <td>30</td>
                    <td>1</td>
                    <td>2</td>
                    <td className="active-day">3</td>
                    <td>4</td>
                    <td>5</td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                  </tr>

                  <tr>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                  </tr>

                  <tr>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                  </tr>

                  <tr>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                    <td>1</td>
                    <td>2</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <div className="people-section">

              <h3>People</h3>

              <div className="people-search">

                <FiSearch />

                <input
                  type="text"
                  placeholder="Search for People"
                />

              </div>

              <div className="people-list">

                {people.map((person) => (

                  <div
                    className="people-card"
                    key={person.id}
                  >

                    <img
                      src={person.avatar}
                      alt={person.name}
                    />

                    <div>

                      <h4>{person.name}</h4>

                      <p>{person.email}</p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <button className="my-schedule-btn">

              My Schedule

            </button>

          </aside>

          <section className="schedule-table-section">
                        <div className="schedule-table-header">

              <div className="table-checkbox">

                <input type="checkbox" />

              </div>

              <div className="table-date">

                Date

              </div>

              <div className="table-time">

                Time

              </div>

              <div className="table-location">

                Location

              </div>

              <div className="table-actions"></div>

            </div>

            <div className="schedule-table-body">

              {schedule.map((item) => (

                <div
                  className="schedule-row"
                  key={item.id}
                >

                  <div className="table-checkbox">

                    <input type="checkbox" />

                  </div>

                  <div className="table-date">

                    <FaCalendarAlt />

                    <span>{item.date}</span>

                  </div>

                  <div className="table-time">

                    <FaClock />

                    <span>{item.time}</span>

                  </div>

                  <div className="table-location">

                    <span className="location-pill">

                      <FaMapMarkerAlt />

                      {item.location}

                    </span>

                  </div>

                  <div className="table-actions">

                    <button className="edit-btn">

                      <FiEdit2 />

                    </button>

                    <button className="delete-btn">

                      <FiTrash2 />

                    </button>

                  </div>

                </div>

              ))}

            </div>
                      </section>

        </div>

      </main>

    </div>

  );

};

export default ScheduleList;