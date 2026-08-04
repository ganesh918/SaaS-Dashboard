import "./Schedule.css";
import Sidebar from "../common/Sidebar";

import { useNavigate } from "react-router-dom";

import {
    FiSearch,
    FiFilter,
    FiMoreHorizontal,
    FiMessageCircle,
    FiHeart
} from "react-icons/fi";

import { BsCheckCircleFill } from "react-icons/bs";

import avatar1 from "../../assets/schedule/avatar1.png";
import avatar2 from "../../assets/schedule/avatar2.png";
import avatar3 from "../../assets/schedule/avatar3.png";
import avatar4 from "../../assets/schedule/avatar4.png";

import dashboardDesign from "../../assets/schedule/dashboard-design.png";
import landingDesign from "../../assets/schedule/landing-design.png";
import ecommerceDesign from "../../assets/schedule/ecommerce-design.png";

const Schedule = () => {

    const navigate = useNavigate();
    const todoTasks = [

    {
        id:1,
        title:"Dashboard Design",
        priority:"Low",
        status:"On Track",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:null,
        completed:false,
    },

    {
        id:2,
        title:"Landing Page Design",
        priority:"Medium",
        status:"At Risk",
        statusClass: "at-risk-dark",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:null,
        completed:false,
    },

    {
        id:3,
        title:"E-Shop Mobile App",
        priority:"High",
        status:"On Track",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:null,
        completed:false,
    },

    {
        id:4,
        title:"Dashboard Design",
        priority:"Low",
        status:"On Track",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:null,
        completed:false,
    },

];
const progressTasks = [

    {
        id:5,
        title:"Dashboard Design",
        priority:"High",
        status:"On Track",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:null,
        completed:true,
    },

    {
        id:6,
        title:"Landing Page Design",
        priority:"Low",
        status:"",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:landingDesign,
        completed:true,
    },

    {
        id:7,
        title:"E-Shop Mobile App",
        priority:"Low",
        status:"On Track",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:ecommerceDesign,
        completed:false,
    },

];
const reviewTasks = [

    {
        id:8,
        title:"Dashboard Design",
        priority:"Medium",
        status:"On Track",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:dashboardDesign,
        completed:true,
    },

    {
        id:9,
        title:"E-Shop Mobile App",
        priority:"Low",
        status:"",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:ecommerceDesign,
        completed:true,
    },

];
const doneTasks = [

    {
        id:10,
        title:"Dashboard Design",
        priority:"High",
        status:"On Track",
        description:"Discussion for management dashboard ui design",
        members:[avatar1,avatar2,avatar3,avatar4],
        comments:112,
        likes:"1.2k",
        image:dashboardDesign,
        completed:true,
    },

];
const renderBadge = (priority) => {

    switch(priority){

        case "High":

            return (
                <span className="badge high">
                    High
                </span>
            );

        case "Medium":

            return (
                <span className="badge medium">
                    Medium
                </span>
            );

        default:

            return (
                <span className="badge low">
                    Low
                </span>
            );

    }

};
const renderCard = (task) => (

    <div
        className="schedule-card"
        key={task.id}
    >

        {/* ================= HEADER ================= */}

        <div className="schedule-card-header">

            <div className="schedule-card-title">

                {

                    task.completed ?

                    <BsCheckCircleFill className="checked-icon"/>

                    :

                    <div className="empty-circle"></div>

                }

                <h4>
                    {task.title}
                </h4>

            </div>

            <FiMoreHorizontal className="more-icon"/>

        </div>

        <div className="schedule-card-badges">

            {renderBadge(task.priority)}

            {

                task.status &&

                <span className={`status-badge ${task.status === "At Risk" ? "at-risk" : ""} ${task.statusClass ? task.statusClass : ""}`}>

                    {task.status}

                </span>

            }

        </div>

        <div className="card-body">
            <p className="card-description">
                {task.description}
            </p>

            {
                task.image && (
                    <div className="card-image">
                        <img
                            src={task.image}
                            alt={task.title}
                        />
                    </div>
                )
            }
        </div>

        {/* ================= FOOTER ================= */}

        <div className="card-footer">

            <div className="member-group">

                {

                    task.members.map((member,index)=>(

                        <img
                            key={index}
                            src={member}
                            alt="member"
                        />

                    ))

                }

                <div className="member-count">

                    +

                </div>

            </div>

            <div className="card-stats">

                <span>

                    <FiMessageCircle/>

                    {task.comments}

                </span>

                <span>

                    <FiHeart/>

                    {task.likes}

                </span>

            </div>

        </div>

    </div>

);
const renderColumn = (title, tasks) => (

    <div className="schedule-column">

        <div className="schedule-column-header">

            <h3>

                {title}

            </h3>

            <span>

                {tasks.length}

            </span>

        </div>

        {

            tasks.map((task)=>

                renderCard(task)

            )

        }

    </div>

);
return (

    <div className="schedule-page">

        <Sidebar />

        <main className="schedule-main">

            {/* ==========================================
                    HEADER
            ========================================== */}

            <div className="schedule-header">

                <div className="header-left">

                    <h1>

                        Task Preview

                    </h1>

                    <div className="schedule-tabs">

                        <button
                            onClick={() => navigate("/schedule-list")}
                        >
                            List
                        </button>

                        <button className="active-tab">
                            Board
                        </button>

                        <button
                            onClick={() => navigate("/settings")}
                        >
                            Timeline
                        </button>

                    </div>

                </div>

                <div className="header-right">

                    <button className="filter-btn">

                        Filter

                        <FiFilter />

                    </button>

                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="Search"
                        />

                        <FiSearch />

                    </div>

                </div>

            </div>

            {/* ==========================================
                    BOARD
            ========================================== */}

            <div className="schedule-board">

                {renderColumn(
                    "To Do",
                    todoTasks
                )}

                {renderColumn(
                    "In Progress",
                    progressTasks
                )}

                {renderColumn(
                    "In Review",
                    reviewTasks
                )}

                {renderColumn(
                    "Done",
                    doneTasks
                )}

            </div>

        </main>

    </div>

);
};

export default Schedule;