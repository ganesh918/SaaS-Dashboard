import { useState } from "react";
import "./CreateInvoice.css";
import Sidebar from "../common/Sidebar";

import {
  HiOutlineCamera,
} from "react-icons/hi";

import {
  FiCalendar,
} from "react-icons/fi";

import {
  FaPlus,
  FaTrash,
} from "react-icons/fa";

import {
  IoMdDownload,
} from "react-icons/io";

import {
  MdPrint,
  MdLocationOn,
} from "react-icons/md";

const CreateInvoice = () => {

  const [invoiceId] = useState("#876370");

  const [date, setDate] = useState("2021-01-12");

  const [name, setName] = useState("Alison G.");

  const [email, setEmail] = useState("Example@gmail.com");

  const [address, setAddress] = useState("Street");

  const [products, setProducts] = useState([

    {
      id:1,
      product:"iPod 2021",
      rate:1000,
      qty:10,
      amount:10000,
    },

    {
      id:2,
      product:"Apple Macbook",
      rate:1500,
      qty:10,
      amount:15000,
    },

    {
      id:3,
      product:"iPhone 12",
      rate:885,
      qty:10,
      amount:8850,
    },

  ]);

  return (

    <div className="create-invoice-page">

      <Sidebar />

      <main className="create-invoice-main">

        <section className="invoice-form-section">

          <h2>Create New Invoice</h2>

          <div className="upload-wrapper">

            <div className="upload-circle">

              <HiOutlineCamera />

            </div>

          </div>

          <div className="invoice-grid">

            <div className="form-group">

              <label>Invoice Id</label>

              <input
                type="text"
                value={invoiceId}
                readOnly
              />

            </div>

            <div className="form-group">

              <label>Date</label>

              <div className="date-input">

                <input
                  type="date"
                  value={date}
                  onChange={(e)=>setDate(e.target.value)}
                />

                <FiCalendar/>

              </div>

            </div>

            <div className="form-group full-width">

              <label>Name</label>

              <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />

            </div>

            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

            </div>

            <div className="form-group">

              <label>Address</label>

              <div className="address-input">

                <input
                  type="text"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                />

                <MdLocationOn/>

              </div>

            </div>

          </div>
                    <div className="product-section">

            <div className="product-header">

              <h3>Product Description</h3>

              <button
                className="add-product-btn"
                onClick={() => {

                  const newProduct = {
                    id: Date.now(),
                    product: "",
                    rate: 0,
                    qty: 1,
                    amount: 0,
                  };

                  setProducts([...products, newProduct]);

                }}
              >
                <FaPlus />

                Add Product

              </button>

            </div>

            <table className="product-table">

              <thead>

                <tr>

                  <th>Product</th>

                  <th>Rate</th>

                  <th>Qty</th>

                  <th>Amount</th>

                  <th></th>

                </tr>

              </thead>

              <tbody>

                {products.map((item) => (

                  <tr key={item.id}>

                    <td>

                      <input
                        type="text"
                        value={item.product}
                        onChange={(e) => {

                          setProducts(

                            products.map((product) =>

                              product.id === item.id
                                ? {
                                    ...product,
                                    product: e.target.value,
                                  }
                                : product

                            )

                          );

                        }}
                      />

                    </td>

                    <td>

                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => {

                          const rate = Number(e.target.value);

                          setProducts(

                            products.map((product) =>

                              product.id === item.id
                                ? {
                                    ...product,
                                    rate,
                                    amount: rate * product.qty,
                                  }
                                : product

                            )

                          );

                        }}
                      />

                    </td>

                    <td>

                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) => {

                          const qty = Number(e.target.value);

                          setProducts(

                            products.map((product) =>

                              product.id === item.id
                                ? {
                                    ...product,
                                    qty,
                                    amount: qty * product.rate,
                                  }
                                : product

                            )

                          );

                        }}
                      />

                    </td>

                    <td>

                      ₹ {item.amount.toLocaleString()}

                    </td>

                    <td>

                      <button
                        className="delete-product-btn"
                        onClick={() => {

                          setProducts(

                            products.filter(
                              (product) => product.id !== item.id
                            )

                          );

                        }}
                      >

                        <FaTrash />

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="invoice-buttons">

            <button className="send-btn">

              Send Invoice

            </button>

            <button className="create-btn">

              Create Invoice

            </button>

          </div>

        </section>
                <section className="invoice-preview-section">

          <div className="preview-header">

            <div>

              <h2>Invoice</h2>

              <p>#876370</p>

            </div>

            <div className="preview-actions">

              <button className="preview-icon">

                <IoMdDownload />

              </button>

              <button className="preview-icon">

                <MdPrint />

              </button>

            </div>

          </div>

          <div className="preview-company">

            <h3>BASE</h3>

            <p>Invoice Company</p>

          </div>

          <div className="preview-details">

            <div>

              <span>Billed To</span>

              <h4>{name}</h4>

              <p>{email}</p>

              <p>{address}</p>

            </div>

            <div className="preview-date">

              <span>Date</span>

              <h4>{date}</h4>

            </div>

          </div>

          <table className="preview-table">

            <thead>

              <tr>

                <th>Product</th>

                <th>Rate</th>

                <th>Qty</th>

                <th>Amount</th>

              </tr>

            </thead>

            <tbody>

              {products.map((item) => (

                <tr key={item.id}>

                  <td>{item.product || "-"}</td>

                  <td>₹ {item.rate}</td>

                  <td>{item.qty}</td>

                  <td>₹ {item.amount}</td>

                </tr>

              ))}

            </tbody>

          </table>

          <div className="invoice-summary">

            <div className="summary-row">

              <span>Subtotal</span>

              <span>

                ₹{" "}

                {products
                  .reduce((sum, item) => sum + item.amount, 0)
                  .toLocaleString()}

              </span>

            </div>

            <div className="summary-row">

              <span>Tax (5%)</span>

              <span>

                ₹{" "}

                {(
                  products.reduce(
                    (sum, item) => sum + item.amount,
                    0
                  ) * 0.05
                ).toFixed(2)}

              </span>

            </div>

            <div className="summary-row total-row">

              <span>Total</span>

              <span>

                ₹{" "}

                {(
                  products.reduce(
                    (sum, item) => sum + item.amount,
                    0
                  ) * 1.05
                ).toFixed(2)}

              </span>

            </div>

          </div>

          <div className="invoice-note">

            <h4>Notes</h4>

            <p>

              Thank you for your business.
              Please complete the payment within
              15 days from the invoice date.

            </p>

          </div>

        </section>
              </main>

    </div>

  );

};

export default CreateInvoice;