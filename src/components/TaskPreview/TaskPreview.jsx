import "./TaskPreview.css";

import { useState } from "react";

import Sidebar from "../common/Sidebar";

import {
    FiSearch,
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiChevronDown
} from "react-icons/fi";

import { FaFigma } from "react-icons/fa";
const TaskPreview = () => {

    const [activeTab, setActiveTab] = useState("list");

    const todoTasks = [

        {
            id:1,
            icon:<FaFigma />,
            title:"Ui Design",
            startDate:"03/12/2021",
            endDate:"05/12/2021",
            members:"5 Member",
            status:"Pending",
        },

        {
    id:2,
    icon:<FaFigma />,
    title:"Logo Design",
    startDate:"03/12/2021",
    endDate:"05/12/2021",
    members:"5 Member",
    status:"Pending",
}
    ];

    const doingTasks = [

        {
            id:3,
            icon:"Ps",
            title:"Graphic Design",
            startDate:"03/12/2021",
            endDate:"05/12/2021",
            members:"5 Member",
            status:"Running",
        },

        {
            id:4,
            icon:"<>",
            title:"Web Design",
            startDate:"03/12/2021",
            endDate:"05/12/2021",
            members:"5 Member",
            status:"Running",
        },

    ];

    const doneTasks = [

        {
            id:5,
            icon:<FaFigma />,
            title:"Logo Design",
            startDate:"01/12/2021",
            endDate:"03/12/2021",
            members:"5 Member",
            status:"Done",
        },

    ];

    return(

        <div className="task-preview-page">

            <Sidebar />

            <main className="task-preview-main">

                <div className="task-preview-top">

                    <div className="task-preview-left">

                        <h1>

                            Task Preview

                        </h1>

                        <div className="task-tabs">

                            <button
                                className={activeTab==="list" ? "active" : ""}
                                onClick={()=>setActiveTab("list")}
                            >

                                List

                            </button>

                            <button
                                className={activeTab==="board" ? "active" : ""}
                                onClick={()=>setActiveTab("board")}
                            >

                                Board

                            </button>

                            <button
                                className={activeTab==="timeline" ? "active" : ""}
                                onClick={()=>setActiveTab("timeline")}
                            >

                                Timeline

                            </button>

                        </div>

                    </div>

                    <div className="task-preview-right">

                        <button className="add-task-btn">

                            <FiPlus />

                            Add Task

                        </button>

                        <div className="task-search-box">

                            <input
                                type="text"
                                placeholder="Search"
                            />

                            <FiSearch />

                        </div>

                    </div>

                </div>
                                {/* ======================================================
                            TO DO SECTION
                ====================================================== */}

                <section className="task-section">

                    <div className="task-section-header">

                        <h2>

                            To Do

                        </h2>

                        <button className="see-more-btn">

                            See More

                        </button>

                    </div>

                    <div className="task-table">

                        {/* ==========================
                                TABLE HEADER
                        =========================== */}

                        <div className="task-table-header">

                            <div className="col-checkbox">

                                Check Box

                            </div>

                            <div className="col-task">

                                Task Name

                                <FiChevronDown />

                            </div>

                            <div className="col-start">

                                Start Date

                                <FiChevronDown />

                            </div>

                            <div className="col-end">

                                End Date

                                <FiChevronDown />

                            </div>

                            <div className="col-member">

                                Member

                                <FiChevronDown />

                            </div>

                            <div className="col-status">

                                Status

                                <FiChevronDown />

                            </div>

                            <div className="col-action">

                                Actions

                            </div>

                        </div>

                        {/* ==========================
                                TABLE ROWS
                        =========================== */}

                        {

                            todoTasks.map((task)=>(

                                <div
                                    key={task.id}
                                    className="task-row"
                                >

                                    <div className="col-checkbox">

                                        <input
                                            type="checkbox"
                                        />

                                    </div>

                                    <div className="col-task">

                                        <div className="task-name">

                                            <div className="task-icon figma">

                                                {task.icon}

                                            </div>

                                            <span>

                                                {task.title}

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-start">

                                        {task.startDate}

                                    </div>

                                    <div className="col-end task-end-date">

                                        {task.endDate}

                                    </div>

                                    <div className="col-member">

                                        {task.members}

                                    </div>

                                    <div className="col-status">

                                        <span className="status pending">

                                            {task.status}

                                        </span>

                                    </div>

                                    <div className="col-action">

                                        <button className="edit-btn">

                                            <FiEdit2 />

                                        </button>

                                        <button className="delete-btn">

                                            <FiTrash2 />

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                </section>
                                {/* ======================================================
                            DOING SECTION
                ====================================================== */}

                <section className="task-section">

                    <div className="task-section-header">

                        <h2>

                            Doing

                        </h2>

                        <button className="see-more-btn">

                            See More

                        </button>

                    </div>

                    <div className="task-table">

                        <div className="task-table-header">

                            <div className="col-checkbox">

                                Check Box

                            </div>

                            <div className="col-task">

                                Task Name

                                <FiChevronDown />

                            </div>

                            <div className="col-start">

                                Start Date

                                <FiChevronDown />

                            </div>

                            <div className="col-end">

                                End Date

                                <FiChevronDown />

                            </div>

                            <div className="col-member">

                                Member

                                <FiChevronDown />

                            </div>

                            <div className="col-status">

                                Status

                                <FiChevronDown />

                            </div>

                            <div className="col-action">

                                Actions

                            </div>

                        </div>

                        {

                            doingTasks.map((task)=>(

                                <div
                                    key={task.id}
                                    className="task-row"
                                >

                                    <div className="col-checkbox">

                                        <input
                                            type="checkbox"
                                            checked
                                            readOnly
                                        />

                                    </div>

                                    <div className="col-task">

                                        <div className="task-name">

                                            <div
                                                className={`task-icon ${
                                                    task.title === "Graphic Design"
                                                        ? "photoshop"
                                                        : "web"
                                                }`}
                                            >

                                                {task.icon}

                                            </div>

                                            <span>

                                                {task.title}

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-start">

                                        {task.startDate}

                                    </div>

                                    <div className="col-end task-end-date">

                                        {task.endDate}

                                    </div>

                                    <div className="col-member">

                                        {task.members}

                                    </div>

                                    <div className="col-status">

                                        <span className="status running">

                                            {task.status}

                                        </span>

                                    </div>

                                    <div className="col-action">

                                        <button className="edit-btn">

                                            <FiEdit2 />

                                        </button>

                                        <button className="delete-btn">

                                            <FiTrash2 />

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                </section>
                                {/* ======================================================
                            DONE SECTION
                ====================================================== */}

                <section className="task-section">

                    <div className="task-section-header">

                        <h2>

                            Done

                        </h2>

                        <button className="see-more-btn">

                            See More

                        </button>

                    </div>

                    <div className="task-table">

                        <div className="task-table-header">

                            <div className="col-checkbox">

                                Check Box

                            </div>

                            <div className="col-task">

                                Task Name

                                <FiChevronDown />

                            </div>

                            <div className="col-start">

                                Start Date

                                <FiChevronDown />

                            </div>

                            <div className="col-end">

                                End Date

                                <FiChevronDown />

                            </div>

                            <div className="col-member">

                                Member

                                <FiChevronDown />

                            </div>

                            <div className="col-status">

                                Status

                                <FiChevronDown />

                            </div>

                            <div className="col-action">

                                Actions

                            </div>

                        </div>

                        {

                            doneTasks.map((task)=>(

                                <div
                                    key={task.id}
                                    className="task-row"
                                >

                                    <div className="col-checkbox">

                                        <input
                                            type="checkbox"
                                            checked
                                            readOnly
                                        />

                                    </div>

                                    <div className="col-task">

                                        <div className="task-name">

                                            <div className="task-icon illustrator">

                                                {task.icon}

                                            </div>

                                            <span>

                                                {task.title}

                                            </span>

                                        </div>

                                    </div>

                                    <div className="col-start">

                                        {task.startDate}

                                    </div>

                                    <div className="col-end task-end-date">

                                        {task.endDate}

                                    </div>

                                    <div className="col-member">

                                        {task.members}

                                    </div>

                                    <div className="col-status">

                                        <span className="status done">

                                            {task.status}

                                        </span>

                                    </div>

                                    <div className="col-action">

                                        <button className="edit-btn">

                                            <FiEdit2 />

                                        </button>

                                        <button className="delete-btn">

                                            <FiTrash2 />

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                </section>

            </main>

        </div>

    );

};

export default TaskPreview;