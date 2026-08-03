import "./Settings.css";

import Sidebar from "../common/Sidebar";

import {
    HiOutlinePlus,
    HiChevronRight,
    HiOutlineCheck
} from "react-icons/hi";

import { BsThreeDots } from "react-icons/bs";

import avatar1 from "../../assets/settings/avatar1.png";
import avatar2 from "../../assets/settings/avatar2.png";
import avatar3 from "../../assets/settings/avatar3.png";
import avatar4 from "../../assets/settings/avatar4.png";
const dates = [
    "29",
    "30",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14"
];

const hours = [
    "09.00 AM",
    "10.00 AM",
    "11.00 AM",
    "12.00 PM",
    "01.00 PM",
    "02.00 PM",
    "03.00 PM",
    "04.00 PM",
    "05.00 PM"
];
const tasks = [
    {
        title: "Graphic Design",
        time: "09.00 AM",
        priority: "Low",
        status: "On Track",
        checked: false,
        dayIndex: 2
    },
    {
        title: "Dashboard Design",
        time: "11.00 AM",
        priority: "High",
        status: "On Track",
        checked: true,
        dayIndex: 4
    },
    {
        title: "Logo Design",
        time: "01.00 PM",
        priority: "High",
        status: "On Track",
        checked: true,
        dayIndex: 2
    },
    {
        title: "Web Design",
        time: "03.00 PM",
        priority: "High",
        status: "On Track",
        checked: true,
        dayIndex: 5
    }
];
const Settings = () => {

    return (

        <div className="settings-page">

            <Sidebar />

            <main className="settings-main">
                <div className="settings-header">

    <h1>

        Task Preview

    </h1>

    <div className="settings-actions">

        <button className="add-task-btn">

            <HiOutlinePlus />

            Add Task

        </button>

        <select>

            <option>

                December 2021

            </option>

        </select>

    </div>

</div>
<div className="settings-tabs">

    <button>

        List

    </button>

    <button>

        Board

    </button>

    <button className="active">

        Timeline

    </button>

</div>
<div className="settings-body">

    {/* LEFT */}

    <div className="status-panel">

        <button className="status-card active">

            <span>

                To Do

            </span>

            <HiChevronRight />

        </button>

        <button className="status-card">

            <span>

                Doing

            </span>

            <HiChevronRight />

        </button>

        <button className="status-card">

            <span>

                Done

            </span>

            <HiChevronRight />

        </button>

    </div>

    {/* RIGHT */}

    <div className="timeline-wrapper">
        {/* ==========================================
                TIMELINE HEADER
========================================== */}

<div className="timeline-header">

    <div className="timeline-header-space"></div>

    <div className="timeline-date-row">

        {dates.map((day) => (

            <div
                key={day}
                className={
                    day === "02"
                        ? "timeline-date active-date"
                        : "timeline-date"
                }
            >

                {day}

            </div>

        ))}

    </div>

</div>
{/* ==========================================
                TIMELINE GRID
========================================== */}

<div className="timeline-grid">

    {

        hours.map((hour) => {

            const task = tasks.find(

                (item) => item.time === hour

            );

            return (

                <div
                    className="timeline-row"
                    key={hour}
                >

                    {/* Time */}

                    <div className="timeline-hour">

                        {hour}

                    </div>

                    {/* Row */}

                    <div className="timeline-track">
                        {
                            task && (
                                <div
                                    className="task-positioner"
                                    style={{ left: `${(task.dayIndex - 1) * 58 + 8}px` }}
                                >
                                    <div className="task-card">
                                        {/* LEFT */}
                                        <div className="task-left">
                                            {
                                                task.checked ? (
                                                    <div className="task-check checked">
                                                        <HiOutlineCheck />
                                                    </div>
                                                ) : (
                                                    <div className="task-check"></div>
                                                )
                                            }
                                            <h3>{task.title}</h3>
                                        </div>

                                        {/* RIGHT */}
                                        <div className="task-right">
                                            <div className="task-members">
                                                <img src={avatar1} alt="" />
                                                <img src={avatar2} alt="" />
                                                <img src={avatar3} alt="" />
                                                <img src={avatar4} alt="" />
                                                <div className="avatar-add">+</div>
                                            </div>

                                            <span className={`priority ${task.priority === "High" ? "high" : "low"}`}>
                                                {task.priority}
                                            </span>
                                            <span className="track-status">{task.status}</span>
                                            <BsThreeDots className="task-menu" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>

            );

        })

    }

</div>
    </div>

</div>

</main>

</div>

);

};

export default Settings;