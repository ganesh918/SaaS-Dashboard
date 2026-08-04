import "./Calendar.css";

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../common/Sidebar";
import CreateEventModal from "./CreateEventModal";
import {
  FiPlus,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import eddie from "../../assets/calendar/eddie.png";
import alexey from "../../assets/calendar/alexey.png";
import anton from "../../assets/calendar/anton.png";

const weekDays = [
  "S",
  "M",
  "T",
  "W",
  "T",
  "F",
  "S",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const people = [
  {
    id: 1,
    name: "Eddie Lobanovskiy",
    email: "lobanovskiy@gmail.com",
    image: eddie,
  },
  {
    id: 2,
    name: "Alexey Stave",
    email: "alexey@gmail.com",
    image: alexey,
  },
  {
    id: 3,
    name: "Anton Tkacheve",
    email: "anton@gmail.com",
    image: anton,
  },
];
const monthEvents = [
  {
    day: 2,
    events: [
      {
        text: "Free day",
        className: "event-blue",
      },
      {
        text: "Party Time",
        className: "event-pink",
      },
      {
        text: "More",
        className: "event-more",
      },
    ],
  },

  {
    day: 16,
    events: [
      {
        text: "Victory day",
        className: "event-orange",
      },
    ],
  },

  {
    day: 21,
    events: [
      {
        text: "Invited by friends",
        className: "event-pink",
      },
    ],
  },

  {
    day: 25,
    events: [
      {
        text: "Christmas Day",
        className: "event-blue",
      },
    ],
  },
];

const Calendar = () => {

  const [view, setView] = useState("year");

  const [currentDate, setCurrentDate] = useState(
    new Date()
  );

  const [selectedDate, setSelectedDate] = useState(
    new Date()
  );
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const year = currentDate.getFullYear();

  const month = currentDate.getMonth();
    const miniCalendar = useMemo(() => {

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const previousMonthDays = new Date(year, month, 0).getDate();

    const calendar = [];

    // leading days from previous month
    for (let i = 0; i < firstDay; i++) {
      calendar.push({
        day: previousMonthDays - (firstDay - 1 - i),
        current: false,
      });
    }

    // current month days
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push({ day: i, current: true });
    }

    // trailing days to fill 6 rows (42 cells)
    const totalCells = 42;
    const trailingCount = totalCells - calendar.length;
    for (let i = 1; i <= trailingCount; i++) {
      calendar.push({ day: i, current: false });
    }

    return calendar;

  }, [month, year]);
    return (

    <div className="calendar-page">

      <Sidebar />

      <main className="calendar-main">

        <div className="calendar-topbar">

          <h1 className="calendar-title">

            Calendar

          </h1>

          <div className="calendar-view-switch">

            <button
              className={view === "day" ? "calendar-active-view" : ""}
              onClick={() => setView("day")}
            >
              Day
            </button>

            <button
              className={view === "week" ? "calendar-active-view" : ""}
              onClick={() => setView("week")}
            >
              Week
            </button>

            <button
              className={view === "month" ? "calendar-active-view" : ""}
              onClick={() => setView("month")}
            >
              Month
            </button>

            <button
              className={view === "year" ? "calendar-active-view" : ""}
              onClick={() => setView("year")}
            >
              Year
            </button>

          </div>

        </div>

        <div className="calendar-layout">

          <aside className="calendar-left">
<button
    className="calendar-create-button"
    onClick={() => setShowModal(true)}
>

    <FiPlus />

    <span>

        Create Schedule

    </span>

</button>
            <div className="calendar-mini">

              <div className="calendar-mini-header">

                <h3>

                  {monthNames[month]}, {year}

                </h3>

                <div className="calendar-mini-actions">

                  <button
                    onClick={() =>
                      setCurrentDate(
                        new Date(year, month - 1, 1)
                      )
                    }
                  >

                    <FiChevronLeft />

                  </button>

                  <button
                    onClick={() =>
                      setCurrentDate(
                        new Date(year, month + 1, 1)
                      )
                    }
                  >

                    <FiChevronRight />

                  </button>

                </div>

              </div>

              <div className="calendar-mini-weekdays">

                {weekDays.map((day) => (

                  <span key={day}>

                    {day}

                  </span>

                ))}

              </div>

              <div className="calendar-mini-grid">

                {miniCalendar.map((item, index) => {

                  const active =

                    item.current &&

                    item.day === selectedDate.getDate() &&

                    month === selectedDate.getMonth() &&

                    year === selectedDate.getFullYear();

                  const today = new Date();

                  const isToday =

                    item.current &&

                    item.day === today.getDate() &&

                    month === today.getMonth() &&

                    year === today.getFullYear();

                  return (

                    <button

                      key={index}

                      className={`
                        calendar-mini-day
                        ${!item.current ? "calendar-mini-disabled" : ""}
                        ${active ? "calendar-mini-selected" : ""}
                        ${isToday ? "calendar-mini-today" : ""}
                      `}

                      onClick={() => {

                        if (!item.current) return;

                        setSelectedDate(
                          new Date(
                            year,
                            month,
                            item.day
                          )
                        );

                      }}

                    >

                      {item.day}

                    </button>

                  );

                })}

              </div>

            </div>

            <div className="calendar-people-section">

              <h3>

                People

              </h3>

              <div className="calendar-search-box">

                <FiSearch />

                <input
                  type="text"
                  placeholder="Search for People"
                />

              </div>

              <div className="calendar-people-list">

                {people.map((person) => (

                  <div
                    key={person.id}
                    className="calendar-person"
                  >

                    <img
                      src={person.image}
                      alt={person.name}
                    />

                    <div className="calendar-person-info">

                      <h4>

                        {person.name}

                      </h4>

                      <p>

                        {person.email}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

              <button
    className="calendar-my-schedule"
    onClick={() => navigate("/task-preview")}
>

    My Schedule

</button>
            </div>

          </aside>

          <section className="calendar-right">
                        {view === "year" && (

              <div className="calendar-year-view">

                <div className="calendar-year-grid">

                  {monthNames.map((monthName, monthIndex) => {

                    const firstDay = new Date(
                      year,
                      monthIndex,
                      1
                    ).getDay();

                    const totalDays = new Date(
                      year,
                      monthIndex + 1,
                      0
                    ).getDate();

                    const previousMonthDays = new Date(
                      year,
                      monthIndex,
                      0
                    ).getDate();

                    const days = [];

                    for (
                      let i = firstDay - 1;
                      i >= 0;
                      i--
                    ) {

                      days.push({

                        day: previousMonthDays - i,

                        current: false,

                      });

                    }

                    for (
                      let i = 1;
                      i <= totalDays;
                      i++
                    ) {

                      days.push({

                        day: i,

                        current: true,

                      });

                    }

                    while (days.length < 42) {

                      days.push({

                        day:
                          days.length -
                          totalDays -
                          firstDay +
                          1,

                        current: false,

                      });

                    }

                    return (

                      <div
                        key={monthName}
                        className="calendar-year-month"
                      >

                        <div className="calendar-year-title">

                          <h3>

                            {monthName}

                          </h3>

                          <span>

                            {year}

                          </span>

                        </div>

                        <div className="calendar-year-weekdays">

                          {weekDays.map((day) => (

                            <span key={day}>

                              {day}

                            </span>

                          ))}

                        </div>

                        <div className="calendar-year-days">

                          {days.map((item, index) => {

                            const today = new Date();

                            const isToday =

                              item.current &&

                              item.day === today.getDate() &&

                              monthIndex === today.getMonth() &&

                              year === today.getFullYear();

                            return (

                              <button

                                key={index}

                                className={`
                                  calendar-year-day
                                  ${
                                    !item.current
                                      ? "calendar-year-disabled"
                                      : ""
                                  }
                                  ${
                                    isToday
                                      ? "calendar-year-today"
                                      : ""
                                  }
                                `}

                                onClick={() => {

                                  if (!item.current) return;

                                  setCurrentDate(
                                    new Date(
                                      year,
                                      monthIndex,
                                      item.day
                                    )
                                  );

                                  setSelectedDate(
                                    new Date(
                                      year,
                                      monthIndex,
                                      item.day
                                    )
                                  );

                                  setView("month");

                                }}

                              >

                                {item.day}

                              </button>

                            );

                          })}

                        </div>

                      </div>

                    );

                  })}

                </div>

              </div>

            )}
                        {view === "month" && (

              <div className="calendar-month-view">

                <div className="calendar-month-top">

                  <button
                    className="calendar-arrow"
                    onClick={() =>
                      setCurrentDate(
                        new Date(year, month - 1, 1)
                      )
                    }
                  >

                    <FiChevronLeft />

                  </button>

                  <h2>

                    {monthNames[month]} {year}

                  </h2>

                  <button
                    className="calendar-arrow"
                    onClick={() =>
                      setCurrentDate(
                        new Date(year, month + 1, 1)
                      )
                    }
                  >

                    <FiChevronRight />

                  </button>

                </div>

                <div className="calendar-month-weekdays">

                  {weekDays.map((day) => (

                    <div
                      key={day}
                      className="calendar-month-weekday"
                    >

                      {day}

                    </div>

                  ))}

                </div>

                <div className="calendar-month-grid">

                  {(() => {

                    const firstDay = new Date(
                      year,
                      month,
                      1
                    ).getDay();

                    const totalDays = new Date(
                      year,
                      month + 1,
                      0
                    ).getDate();

                    const previousDays = new Date(
                      year,
                      month,
                      0
                    ).getDate();

                    const cells = [];

                    for (
                      let i = firstDay - 1;
                      i >= 0;
                      i--
                    ) {

                      cells.push({

                        day: previousDays - i,

                        current: false,

                      });

                    }

                    for (
                      let i = 1;
                      i <= totalDays;
                      i++
                    ) {

                      cells.push({

                        day: i,

                        current: true,

                      });

                    }

                    while (cells.length < 42) {

                      cells.push({

                        day:
                          cells.length -
                          totalDays -
                          firstDay +
                          1,

                        current: false,

                      });

                    }

                    return cells.map((item, index) => {

                      const active =

                        item.current &&

                        item.day === selectedDate.getDate() &&

                        month === selectedDate.getMonth() &&

                        year === selectedDate.getFullYear();

                      return (

                        <button

                          key={index}

                          className={`
                            calendar-month-day
                            ${
                              !item.current
                                ? "calendar-month-disabled"
                                : ""
                            }
                            ${
                              active
                                ? "calendar-month-selected"
                                : ""
                            }
                          `}

                          onClick={() => {

                            if (!item.current) return;

                            setSelectedDate(
                              new Date(
                                year,
                                month,
                                item.day
                              )
                            );

                            setView("day");

                          }}

                        >

                         <>
  <span>{item.day}</span>

  {item.current &&
    monthEvents
      .find((event) => event.day === item.day)
      ?.events.map((event, index) => (
        <div
          key={index}
          className={`calendar-month-event ${event.className}`}
        >
          {event.text}
        </div>
      ))}
</>

                        </button>

                      );

                    });

                  })()}

                </div>

              </div>

            )}
                        {view === "week" && (() => {

              const start = new Date(selectedDate);

              start.setDate(
                selectedDate.getDate() - selectedDate.getDay()
              );

              const weekDates = Array.from(
                { length: 7 },
                (_, index) => {
                  const date = new Date(start);
                  date.setDate(start.getDate() + index);
                  return date;
                }
              );

              const hours = Array.from(
                { length: 13 },
                (_, index) => index + 8
              );

              return (

                <div className="calendar-week-view">

                  <div className="calendar-week-header">

                    <button
                      className="calendar-arrow"
                      onClick={() => {
                        const date = new Date(selectedDate);
                        date.setDate(date.getDate() - 7);
                        setSelectedDate(date);
                        setCurrentDate(date);
                      }}
                    >
                      <FiChevronLeft />
                    </button>

                    <h2>

                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}

                    </h2>

                    <button
                      className="calendar-arrow"
                      onClick={() => {
                        const date = new Date(selectedDate);
                        date.setDate(date.getDate() + 7);
                        setSelectedDate(date);
                        setCurrentDate(date);
                      }}
                    >
                      <FiChevronRight />
                    </button>

                  </div>

                  <div className="calendar-week-grid">

                    <div className="calendar-week-time-header"></div>

                    {weekDates.map((date) => (

                      <div
                        key={date.toDateString()}
                        className="calendar-week-day-header"
                      >

                        <span>

                          {weekDays[date.getDay()]}

                        </span>

                        <strong>

                          {date.getDate()}

                        </strong>

                      </div>

                    ))}

                    {hours.map((hour) => (

                      <>

                        <div
                          key={`time-${hour}`}
                          className="calendar-week-time"
                        >

                          {hour}:00

                        </div>

                        {weekDates.map((date) => {

                          const active =

                            date.toDateString() ===
                              selectedDate.toDateString() &&
                            hour === 10;

                          return (

                            <div
                              key={`${hour}-${date}`}
                              className="calendar-week-cell"
                            >

                              {active && (

                                <div className="calendar-week-event">

                                  Meeting

                                </div>

                              )}

                            </div>

                          );

                        })}

                      </>

                    ))}

                  </div>

                  <div className="calendar-week-footer">

                    <button
                      className="calendar-next-view"
                      onClick={() => setView("day")}
                    >

                      Open Day View

                    </button>

                  </div>

                </div>

              );

            })()}
                       {view === "day" && (() => {

    const dayEvents = [

        {
            id: 1,
            title: "Invited by friends",
            start: "09:00",
            end: "10:00",
            top: 40,
            left: "5%",
            color: "#F48FB1",
        },

        {
            id: 2,
            title: "Prayer Time",
            start: "12:00",
            end: "13:00",
            top: 235,
            left: "35%",
            color: "#2EC7E6",
        },

        {
            id: 3,
            title: "Lunch Time",
            start: "14:00",
            end: "15:00",
            top: 365,
            left: "65%",
            color: "#FF8A65",
        },

        {
            id: 4,
            title: "Prayer Time",
            start: "18:00",
            end: "19:00",
            top: 620,
            left: "18%",
            color: "#66BB6A",
        },

        {
            id: 5,
            title: "Dinner Time",
            start: "21:00",
            end: "22:00",
            top: 815,
            left: "48%",
            color: "#5B56F0",
        },

    ];

    const hours = [

        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
        "06:00 PM",
        "07:00 PM",
        "08:00 PM",
        "09:00 PM",
        "10:00 PM",
        "11:00 PM",
        "12:00 AM",
        "01:00 AM",

    ];

    return (

        <div className="calendar-day-new">

            <div className="calendar-day-topbar">

                <button
                    className="calendar-arrow"
                    onClick={() => {

                        const d = new Date(selectedDate);

                        d.setDate(d.getDate() - 1);

                        setSelectedDate(d);

                        setCurrentDate(d);

                    }}
                >

                    <FiChevronLeft />

                </button>

                <h2>

                    Thursday, December 2

                </h2>

                <button
                    className="calendar-arrow"
                    onClick={() => {

                        const d = new Date(selectedDate);

                        d.setDate(d.getDate() + 1);

                        setSelectedDate(d);

                        setCurrentDate(d);

                    }}
                >

                    <FiChevronRight />

                </button>

            </div>

            <div className="calendar-day-content">

                <div className="calendar-day-time-column">

                    {hours.map((hour) => (

                        <div
                            key={hour}
                            className="calendar-day-hour"
                        >

                            {hour}

                        </div>

                    ))}

                </div>

                <div className="calendar-day-event-area">
                                        {hours.map((hour) => (

                        <div
                            key={hour}
                            className="calendar-day-line"
                        >

                            <div className="calendar-day-horizontal-line"></div>

                        </div>

                    ))}

                    {dayEvents.map((event) => (

                        <div
                            key={event.id}
                            className="calendar-floating-event"
                            style={{
                                top: `${event.top}px`,
                                left: event.left,
                                background: event.color,
                            }}
                        >

                            <div className="calendar-event-title">

                                {event.title}

                            </div>

                            <div className="calendar-event-time">

                                {event.start} - {event.end}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <div className="calendar-day-footer">

                <button
                    className="calendar-next-view"
                    onClick={() => setView("week")}
                >

                    Back to Week View

                </button>

            </div>

        </div>

    );

})()}
          </section>

        </div>

      </main>
      {showModal && (
    <CreateEventModal
        onClose={() => setShowModal(false)}
    />
)}

    </div>

  );

};

export default Calendar;