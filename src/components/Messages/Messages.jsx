import "./Messages.css";

import { useState } from "react";
import { IoPaperPlane } from "react-icons/io5";
import Sidebar from "../common/Sidebar";

import {
    FiSearch,
    FiPhone,
    FiVideo,
    FiMoreVertical,
    FiPaperclip,
    FiSmile,
    FiSend,
    FiPlus,
} from "react-icons/fi";

import { BsCircleFill } from "react-icons/bs";

import Shelby from "../../assets/images/shelby.png";
import Robert from "../../assets/images/robert.png";
import John from "../../assets/images/john.png";
import Adriene from "../../assets/images/adriene.png";
import Mark from "../../assets/images/mark.png";
import Bethany from "../../assets/images/bethany.png";
import JohnDoe from "../../assets/images/jhondoe.png";

import DashboardPreview1 from "../../assets/images/dashboard-preview-1.png";
import DashboardPreview2 from "../../assets/images/dashboard-preview-2.png";

const Messages = () => {

    const [activeTab, setActiveTab] = useState("personal");

    const [selectedUser, setSelectedUser] = useState(3);

    const users = [

        {
            id:1,
            image:Shelby,
            name:"Shelby Goode",
            message:"Lorem Ipsum is simply dummy...",
            time:"1 min ago",
            online:true,
        },

        {
            id:2,
            image:Robert,
            name:"Robert Fox",
            message:"Lorem Ipsum is simply dummy...",
            time:"5 min ago",
            online:true,
        },

        {
            id:3,
            image:John,
            name:"John Carlio",
            message:"Lorem Ipsum is simply dummy...",
            time:"20 min ago",
            online:true,
        },

        {
            id:4,
            image:Adriene,
            name:"Adriene Grey",
            message:"Lorem Ipsum is simply dummy...",
            time:"1 hr ago",
            online:false,
        },

        {
            id:5,
            image:Mark,
            name:"Mark Hall",
            message:"Lorem Ipsum is simply dummy...",
            time:"Yesterday",
            online:false,
        },

        {
            id:6,
            image:Bethany,
            name:"Bethany White",
            message:"Lorem Ipsum is simply dummy...",
            time:"Yesterday",
            online:false,
        },

    ];

    return(

        <div className="messages-page">

            <Sidebar />

            <main className="messages-main">

                <section className="messages-left">

                    <div className="messages-header">

                        <h1>

                            Message

                        </h1>

                        <button className="messages-add-btn">

                            <FiPlus />

                        </button>

                    </div>

                    <div className="messages-search">

                        <FiSearch />

                        <input
                            type="text"
                            placeholder="Search"
                        />

                    </div>

                    <div className="messages-tabs">

                        <button

                            className={
                                activeTab==="all"
                                ? "active"
                                : ""
                            }

                            onClick={()=>
                                setActiveTab("all")
                            }

                        >

                            All

                        </button>

                        <button

                            className={
                                activeTab==="personal"
                                ? "active"
                                : ""
                            }

                            onClick={()=>
                                setActiveTab("personal")
                            }

                        >

                            Personal

                        </button>

                        <button

                            className={
                                activeTab==="teams"
                                ? "active"
                                : ""
                            }

                            onClick={()=>
                                setActiveTab("teams")
                            }

                        >

                            Teams

                        </button>

                    </div>

                    <div className="messages-user-list">

                        {

                            users.map((user)=>(

                                <div

                                    key={user.id}

                                    className={
                                        selectedUser===user.id
                                        ? "message-user active"
                                        : "message-user"
                                    }

                                    onClick={()=>
                                        setSelectedUser(user.id)
                                    }

                                >

                                    <div className="message-avatar">

                                        <img

                                            src={user.image}

                                            alt={user.name}

                                        />

                                        {

                                            user.online && (

                                                <BsCircleFill className="online-dot" />

                                            )

                                        }

                                    </div>

                                    <div className="message-user-info">

                                        <h3>

                                            {user.name}

                                        </h3>

                                        <p>

                                            {user.message}

                                        </p>

                                    </div>

                                    <span className="message-time">

                                        {user.time}

                                    </span>

                                </div>

                            ))

                        }

                    </div>
                                    </section>

                {/* ==========================================
                        RIGHT CHAT PANEL
                ========================================== */}

                <section className="messages-right">

                    <div className="chat-header">

                        <div className="chat-user">

                            <img
                                src={JohnDoe}
                                alt="John Doe"
                            />

                            <div className="chat-user-details">

                                <h2>

                                    John Carlio

                                </h2>

                                <p>

                                    Online

                                </p>

                            </div>

                        </div>

                        <div className="chat-actions">

                            <button>

                                <FiPhone />

                            </button>

                            <button>

                                <FiVideo />

                            </button>

                            <button>

                                <FiMoreVertical />

                            </button>

                        </div>

                    </div>

                    {/* ==========================================
                                CHAT BODY
                    ========================================== */}

                    <div className="chat-body">

                        <div className="message-row left">

                            <img
                                src={JohnDoe}
                                alt=""
                            />

                            <div className="message-bubble">

                                <p>

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                </p>

                                <span>

                                    09:02 PM

                                </span>

                            </div>

                        </div>

                        <div className="message-row right">

                            <div className="message-bubble sent">

                                <p>

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                </p>

                                <span>

                                    09:05 PM

                                </span>

                            </div>

                        </div>

                        <div className="message-row left">

                            <img
                                src={JohnDoe}
                                alt=""
                            />

                            <div className="message-images">

                                <img
                                    src={DashboardPreview1}
                                    alt=""
                                />

                                <img
                                    src={DashboardPreview2}
                                    alt=""
                                />

                                <span>

                                    09:08 PM

                                </span>

                            </div>

                        </div>

                        <div className="message-row right">

                            <div className="message-bubble sent">

                                <p>

                                    Great 👍

                                </p>

                                <span>

                                    09:10 PM

                                </span>

                            </div>

                        </div>

                    </div>

                    {/* ==========================================
                                CHAT INPUT
                    ========================================== */}

                    <div className="chat-input">

                        <button>

                            <FiPaperclip />

                        </button>

                        <input
                            type="text"
                            placeholder="Write your message..."
                        />

                        <button>

                            <FiSmile />

                        </button>
<button className="send-btn">
    ➤
</button>        
 </div>

                </section>

            </main>

        </div>

    );

};

export default Messages;