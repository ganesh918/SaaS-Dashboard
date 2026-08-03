import "./CreateEventModal.css";

import { useState } from "react";

import {
  FiX,
  FiClock,
  FiMapPin,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";

const CreateEventModal = ({ onClose }) => {

  const [activeTab, setActiveTab] = useState("event");

  return (

    <div
      className="create-event-overlay"
      onClick={onClose}
    >

      <div
        className="create-event-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="create-event-header">

          <h2>Create an Event</h2>

          <button
            className="create-event-close"
            onClick={onClose}
          >

            <FiX />

          </button>

        </div>

        <div className="create-event-tabs">

          <button
            className={
              activeTab === "event"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("event")
            }
          >

            Event

          </button>

          <button
            className={
              activeTab === "reminder"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("reminder")
            }
          >

            Reminder

          </button>

          <button
            className={
              activeTab === "task"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveTab("task")
            }
          >

            Task

          </button>

        </div>

        <input
          className="create-event-title"
          type="text"
          placeholder="Add title"
        />
                <div className="create-event-time">

          <div className="create-event-icon">

            <FiClock />

          </div>

          <div className="create-event-time-content">

            <h4>

              Thursday, December 5

              &nbsp;&nbsp;

              12:00 PM

              &nbsp; - &nbsp;

              1:00 PM

            </h4>

            <p>

              Time zone · Does not repeat

            </p>

            <button>

              Find a time

            </button>

          </div>

        </div>

        <div className="create-event-buttons">

          <button className="people-btn">

            <FiUsers />

            Add People

          </button>

          <button className="location-btn">

            <FiMapPin />

            Add Location

          </button>

        </div>
                <div className="create-event-divider"></div>

        <div className="create-event-organizer">

          <div className="create-event-avatar">

            JD

          </div>

          <div className="create-event-organizer-info">

            <h4>

              John Doe

            </h4>

            <p>

              john.doe@gmail.com

            </p>

          </div>

        </div>

        <div className="create-event-divider"></div>

        <div className="create-event-calendar-row">

          <div className="create-event-icon">

            <FiCalendar />

          </div>

          <div className="create-event-calendar-content">

            <h4>

              Calendar

            </h4>

            <p>

              My Calendar

            </p>

          </div>

        </div>

        <div className="create-event-footer">

          <button
            className="create-event-cancel"
            onClick={onClose}
          >

            Close

          </button>

          <button
            className="create-event-save"
            onClick={() => {

              alert("Event Saved Successfully!");

              onClose();

            }}
          >

            Save

          </button>

        </div>

      </div>

    </div>

  );

};

export default CreateEventModal;