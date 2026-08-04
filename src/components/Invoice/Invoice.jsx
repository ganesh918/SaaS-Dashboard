import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Invoice.css";
import Sidebar from "../common/Sidebar";

import {
  BsThreeDotsVertical,
  BsStar,
  BsStarFill,
} from "react-icons/bs";

import {
  MdDeleteOutline,
} from "react-icons/md";

import {
  IoMdArrowDropdown,
} from "react-icons/io";

import {
  FiSearch,
} from "react-icons/fi";
import { FiMail, FiCalendar } from "react-icons/fi";

import avatar1 from "../../assets/invoiceassets/avatar1.png";
import avatar2 from "../../assets/invoiceassets/avatar2.png";
import avatar3 from "../../assets/invoiceassets/avatar3.png";
import avatar4 from "../../assets/invoiceassets/avatar4.png";
import avatar5 from "../../assets/invoiceassets/avatar5.png";
import avatar6 from "../../assets/invoiceassets/avatar6.png";
import avatar7 from "../../assets/invoiceassets/avatar7.png";
import avatar8 from "../../assets/invoiceassets/avatar8.png";
import avatar9 from "../../assets/invoiceassets/avatar9.png";
import avatar10 from "../../assets/invoiceassets/avatar10.png";

const initialInvoices = [

  {
    id:"#876364",
    image:avatar1,
    name:"Arora Gaur",
    email:"aroragaur@gmail.com",
    date:"12 Dec, 2020",
    status:"Complete",
    favourite:true,
  },

  {
    id:"#876365",
    image:avatar2,
    name:"John Deo",
    email:"johndeo@gmail.com",
    date:"13 Dec, 2020",
    status:"Pending",
    favourite:false,
  },

  {
    id:"#876366",
    image:avatar3,
    name:"Robert Bacins",
    email:"robert@gmail.com",
    date:"15 Dec, 2020",
    status:"Complete",
    favourite:true,
  },

  {
    id:"#876367",
    image:avatar4,
    name:"Shelby Goode",
    email:"shelby@gmail.com",
    date:"18 Dec, 2020",
    status:"Cancel",
    favourite:false,
  },

  {
    id:"#876368",
    image:avatar5,
    name:"Adriene Watson",
    email:"adriene@gmail.com",
    date:"21 Dec, 2020",
    status:"Complete",
    favourite:true,
  },

  {
    id:"#876369",
    image:avatar6,
    name:"James Mullican",
    email:"james@gmail.com",
    date:"23 Dec, 2020",
    status:"Pending",
    favourite:false,
  },

  {
    id:"#876370",
    image:avatar7,
    name:"Anne Jacob",
    email:"anne@gmail.com",
    date:"24 Dec, 2020",
    status:"Complete",
    favourite:true,
  },

  {
    id:"#876371",
    image:avatar8,
    name:"Christine Huston",
    email:"christine@gmail.com",
    date:"27 Dec, 2020",
    status:"Pending",
    favourite:false,
  },

  {
    id:"#876372",
    image:avatar9,
    name:"Bethany Jackson",
    email:"bethany@gmail.com",
    date:"29 Dec, 2020",
    status:"Complete",
    favourite:true,
  },

  {
    id:"#876373",
    image:avatar10,
    name:"Mark Ruffalo",
    email:"mark@gmail.com",
    date:"31 Dec, 2020",
    status:"Cancel",
    favourite:false,
  },

];

const Invoice = () => {
    const navigate = useNavigate();

  const [search,setSearch]=useState("");

  const [selectedRows,setSelectedRows]=useState([]);

  const [activeMenu,setActiveMenu]=useState(null);

  const [invoices,setInvoices]=useState(initialInvoices);

  const filteredInvoices=invoices.filter((invoice)=>

    invoice.name.toLowerCase().includes(search.toLowerCase())

  );

  return(

    <div className="invoice-page">

      <Sidebar/>

      <main className="invoice-main">

        <div className="invoice-header">

          <h1>Invoice List</h1>

          <div className="invoice-header-right">

            <div className="invoice-search">

              <FiSearch/>

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />

            </div>
<button
  className="add-new-btn"
  onClick={() => navigate("/create-invoice")}
>
  + Add New
</button>

          </div>

        </div>

        <div className="invoice-table">
                      <div className="invoice-table-header">

            <div className="checkbox-column">

              <input
                type="checkbox"
                checked={
                  selectedRows.length === filteredInvoices.length &&
                  filteredInvoices.length > 0
                }
                onChange={(e) => {

                  if (e.target.checked) {

                    setSelectedRows(
                      filteredInvoices.map((_, index) => index)
                    );

                  } else {

                    setSelectedRows([]);

                  }

                }}
              />

            </div>

            <div className="invoice-id">

              Invoice ID

              <IoMdArrowDropdown />

            </div>

            <div className="invoice-name">

              Name

              <IoMdArrowDropdown />

            </div>

            <div className="invoice-email">
              <FiMail />
              Email

              <IoMdArrowDropdown />

            </div>

            <div className="invoice-date">
              <FiCalendar />
              Date

              <IoMdArrowDropdown />

            </div>

            <div className="invoice-status">

              Status

              <IoMdArrowDropdown />

            </div>

            <div className="invoice-favourite">

              Favourite

            </div>

            <div className="invoice-action">

              <MdDeleteOutline />

            </div>

          </div>

          {filteredInvoices.map((invoice,index)=>(

            <div
              className="invoice-row"
              key={invoice.id}
            >

              <div className="checkbox-column">

                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => {

                    if(selectedRows.includes(index)){

                      setSelectedRows(
                        selectedRows.filter((i)=>i!==index)
                      );

                    }else{

                      setSelectedRows([
                        ...selectedRows,
                        index
                      ]);

                    }

                  }}
                />

              </div>

              <div className="invoice-id">

                {invoice.id}

              </div>

              <div className="invoice-name">

                <img
                  src={invoice.image}
                  alt={invoice.name}
                />

                <span>

                  {invoice.name}

                </span>

              </div>

              <div className="invoice-email">
                <FiMail className="email-icon" />
                <span className="email-text">{invoice.email}</span>
              </div>

              <div className="invoice-date">
                <FiCalendar className="date-icon" />
                <span className="date-text">{invoice.date}</span>
              </div>

              <div className="invoice-status">

                <span
                  className={`status ${invoice.status.toLowerCase()}`}
                >

                  {invoice.status}

                </span>

              </div>

              <div className="invoice-favourite">

                {invoice.favourite ? (

                  <BsStarFill className="filled-star"/>

                ) : (

                  <BsStar className="empty-star"/>

                )}

              </div>

              <div className="invoice-menu">
                                <button
                  className="menu-btn"
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === index ? null : index
                    )
                  }
                >
                  <BsThreeDotsVertical />
                </button>

                {activeMenu === index && (

                  <div className="menu-dropdown">

                    <button
                      className="menu-item"
                      onClick={() => {
                        alert(`Edit ${invoice.name}`);
                        setActiveMenu(null);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="menu-item delete-item"
                      onClick={() => {

                        const updatedInvoices = invoices.filter(
                          (item) => item.id !== invoice.id
                        );

                        setInvoices(updatedInvoices);

                        setSelectedRows([]);

                        setActiveMenu(null);

                      }}
                    >
                      Delete
                    </button>

                  </div>

                )}

              </div>

            </div>

          ))}
                  </div>

      </main>

    </div>

  );

};

export default Invoice;