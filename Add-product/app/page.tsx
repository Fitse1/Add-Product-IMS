import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
export default function AddProduct() {
  return (
    <>

  <div id="global-loader">
    <div className="whirly-loader"> </div>
  </div>
  <div className="main-wrapper">
    <div className="header">
      <div className="header-left active">
        <a href="index.html" className="logo logo-normal">
          <img src="assets/img/logo.png" alt="" />
        </a>
        <a href="index.html" className="logo logo-white">
          <img src="assets/img/logo-white.png" alt="" />
        </a>
        <a href="index.html" className="logo-small">
          <img src="assets/img/logo-small.png" alt="" />
        </a>
        <a id="toggle_btn" href="javascript:void(0);"></a>
      </div>
      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
      <ul className="nav user-menu">
        <li className="nav-item">
          <div className="top-nav-search">
            <a href="javascript:void(0);" className="responsive-search">
              <i className="fa fa-search" />
            </a>
            <form action="#">
              <div className="searchinputs">
                <input type="text" placeholder="Search Here ..." />
                <div className="search-addon">
                  <span>
                    <img src="assets/img/icons/closes.svg" alt="img" />
                  </span>
                </div>
              </div>
              <a className="btn" id="searchdiv">
                <img src="assets/img/icons/search.svg" alt="img" />
              </a>
            </form>
          </div>
        </li>
        <li className="nav-item dropdown has-arrow flag-nav">
          <a
            className="nav-link dropdown-toggle focus:bg-[#eeeeee]"
            data-dropdown-toggle="dropdown"
            href="javascript:void(0);"
            role="button"
          >
            <img src="assets/img/flags/us1.png" alt="" height={20} />
          </a>
          <div
            id="dropdown"
            className="hidden dropdown-menu dropdown-menu-right !translate-x-0 !translate-y-0 !top-[60px] bg-white"
          >
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/us.png" alt="" height={16} /> English
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/fr.png" alt="" height={16} /> French
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/es.png" alt="" height={16} /> Spanish
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/de.png" alt="" height={16} /> German
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle focus:bg-[#eeeeee] nav-link"
            data-dropdown-toggle="dropdownNotify"
          >
            <img src="assets/img/icons/notification-bing.svg" alt="img" />{" "}
            <span className="badge rounded-pill rounded-full">4</span>
          </a>
          <div
            id="dropdownNotify"
            className="hidden dropdown-menu notifications !inset-auto !translate-y-0 !right-0 !top-[60px] bg-white"
          >
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="javascript:void(0)" className="clear-noti">
                {" "}
                Clear All{" "}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                      </span>
                      <div className="media-body flex-grow">
                        <p className="noti-details">
                          <span className="noti-title">John Doe</span> added new
                          task{" "}
                          <span className="noti-title">
                            Patient appointment booking
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                      </span>
                      <div className="media-body flex-grow">
                        <p className="noti-details">
                          <span className="noti-title">Tarah Shropshire</span>{" "}
                          changed the task name{" "}
                          <span className="noti-title">
                            Appointment booking with payment gateway
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                      </span>
                      <div className="media-body flex-grow">
                        <p className="noti-details">
                          <span className="noti-title">Misty Tison</span> added{" "}
                          <span className="noti-title">Domenic Houston</span>{" "}
                          and <span className="noti-title">Claire Mapes</span>{" "}
                          to project{" "}
                          <span className="noti-title">
                            Doctor available module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                      </span>
                      <div className="media-body flex-grow">
                        <p className="noti-details">
                          <span className="noti-title">Rolland Webber</span>{" "}
                          completed task{" "}
                          <span className="noti-title">
                            Patient and Doctor video conferencing
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media flex">
                      <span className="avatar flex-shrink-0">
                        <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                      </span>
                      <div className="media-body flex-grow">
                        <p className="noti-details">
                          <span className="noti-title">Bernardo Galaviz</span>{" "}
                          added new task{" "}
                          <span className="noti-title">
                            Private chat module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="activities.html">View all Notifications</a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle focus:bg-[#eeeeee] nav-link userset"
            data-dropdown-toggle="dropdownProfile"
          >
            <span className="user-img">
              <img src="assets/img/profiles/avator1.jpg" alt="" />
              <span className="status online" />
            </span>
          </a>
          <div
            id="dropdownProfile"
            className="hidden dropdown-menu menu-drop-user !inset-auto !translate-y-0 !right-0 !top-[60px] bg-white"
          >
            <div className="profilename">
              <div className="profileset">
                <span className="user-img">
                  <img src="assets/img/profiles/avator1.jpg" alt="" />
                  <span className="status online" />
                </span>
                <div className="profilesets">
                  <h6>John Doe</h6>
                  <h5>Admin</h5>
                </div>
              </div>
              <hr className="!m-0" />
              <a className="dropdown-item" href="profile.html">
                {" "}
                <i className="mr-2" data-feather="user" /> My Profile
              </a>
              <a className="dropdown-item" href="generalsettings.html">
                <i className="mr-2" data-feather="settings" />
                Settings
              </a>
              <hr className="!m-0" />
              <a className="dropdown-item logout !pb-0" href="signin.html">
                <img
                  src="assets/img/icons/log-out.svg"
                  className="mr-2"
                  alt="img"
                />
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div className="dropdown mobile-user-menu">
        <a
          href="javascript:void(0);"
          className="nav-link dropdown-toggle"
          data-dropdown-toggle="dropdownMobile"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </a>
        <div
          className="hidden dropdown-menu dropdown-menu-right"
          id="dropdownMobile"
        >
          <a className="dropdown-item" href="profile.html">
            My Profile
          </a>
          <a className="dropdown-item" href="generalsettings.html">
            Settings
          </a>
          <a className="dropdown-item" href="signin.html">
            Logout
          </a>
        </div>
      </div>
    </div>
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li>
              <a href="index.html">
                <img src="assets/img/icons/dashboard.svg" alt="img" />
                <span> Dashboard</span>{" "}
              </a>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/product.svg" alt="img" />
                <span> Product</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="productlist.html">Product List</a>
                </li>
                <li>
                  <a href="addproduct.html" className="active">
                    Add Product
                  </a>
                </li>
                <li>
                  <a href="categorylist.html">Category List</a>
                </li>
                <li>
                  <a href="addcategory.html">Add Category</a>
                </li>
                <li>
                  <a href="subcategorylist.html">Sub Category List</a>
                </li>
                <li>
                  <a href="subaddcategory.html">Add Sub Category</a>
                </li>
                <li>
                  <a href="brandlist.html">Brand List</a>
                </li>
                <li>
                  <a href="addbrand.html">Add Brand</a>
                </li>
                <li>
                  <a href="importproduct.html">Import Products</a>
                </li>
                <li>
                  <a href="barcode.html">Print Barcode</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/sales1.svg" alt="img" />
                <span> Sales</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="saleslist.html">Sales List</a>
                </li>
                <li>
                  <a href="pos.html">POS</a>
                </li>
                <li>
                  <a href="pos.html">New Sales</a>
                </li>
                <li>
                  <a href="salesreturnlists.html">Sales Return List</a>
                </li>
                <li>
                  <a href="createsalesreturns.html">New Sales Return</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/purchase1.svg" alt="img" />
                <span> Purchase</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="purchaselist.html">Purchase List</a>
                </li>
                <li>
                  <a href="addpurchase.html">Add Purchase</a>
                </li>
                <li>
                  <a href="importpurchase.html">Import Purchase</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/expense1.svg" alt="img" />
                <span> Expense</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="expenselist.html">Expense List</a>
                </li>
                <li>
                  <a href="createexpense.html">Add Expense</a>
                </li>
                <li>
                  <a href="expensecategory.html">Expense Category</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/quotation1.svg" alt="img" />
                <span> Quotation</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="quotationList.html">Quotation List</a>
                </li>
                <li>
                  <a href="addquotation.html">Add Quotation</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/transfer1.svg" alt="img" />
                <span> Transfer</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="transferlist.html">Transfer List</a>
                </li>
                <li>
                  <a href="addtransfer.html">Add Transfer </a>
                </li>
                <li>
                  <a href="importtransfer.html">Import Transfer </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/return1.svg" alt="img" />
                <span> Return</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="salesreturnlist.html">Sales Return List</a>
                </li>
                <li>
                  <a href="createsalesreturn.html">Add Sales Return </a>
                </li>
                <li>
                  <a href="purchasereturnlist.html">Purchase Return List</a>
                </li>
                <li>
                  <a href="createpurchasereturn.html">Add Purchase Return </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/users1.svg" alt="img" />
                <span> People</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="customerlist.html">Customer List</a>
                </li>
                <li>
                  <a href="addcustomer.html">Add Customer </a>
                </li>
                <li>
                  <a href="supplierlist.html">Supplier List</a>
                </li>
                <li>
                  <a href="addsupplier.html">Add Supplier </a>
                </li>
                <li>
                  <a href="userlist.html">User List</a>
                </li>
                <li>
                  <a href="adduser.html">Add User</a>
                </li>
                <li>
                  <a href="storelist.html">Store List</a>
                </li>
                <li>
                  <a href="addstore.html">Add Store</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/places.svg" alt="img" />
                <span> Places</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="newcountry.html">New Country</a>
                </li>
                <li>
                  <a href="countrieslist.html">Countries list</a>
                </li>
                <li>
                  <a href="newstate.html">New State </a>
                </li>
                <li>
                  <a href="statelist.html">State list</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="components.html">
                <i data-feather="layers" />
                <span> Components</span>{" "}
              </a>
            </li>
            <li>
              <a href="blankpage.html">
                <i data-feather="file" />
                <span> Blank Page</span>{" "}
              </a>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i data-feather="alert-octagon" /> <span> Error Pages </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="error-404.html">404 Error </a>
                </li>
                <li>
                  <a href="error-500.html">500 Error </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i data-feather="box" /> <span>Elements </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="sweetalerts.html">Sweet Alerts</a>
                </li>
                <li>
                  <a href="tooltip.html">Tooltip</a>
                </li>
                <li>
                  <a href="popover.html">Popover</a>
                </li>
                <li>
                  <a href="ribbon.html">Ribbon</a>
                </li>
                <li>
                  <a href="clipboard.html">Clipboard</a>
                </li>
                <li>
                  <a href="drag-drop.html">Drag &amp; Drop</a>
                </li>
                <li>
                  <a href="rangeslider.html">Range Slider</a>
                </li>
                <li>
                  <a href="rating.html">Rating</a>
                </li>
                <li>
                  <a href="toastr.html">Toastr</a>
                </li>
                <li>
                  <a href="counter.html">Counter</a>
                </li>
                <li>
                  <a href="scrollbar.html">Scrollbar</a>
                </li>
                <li>
                  <a href="spinner.html">Spinner</a>
                </li>
                <li>
                  <a href="notification.html">Notification</a>
                </li>
                <li>
                  <a href="lightbox.html">Lightbox</a>
                </li>
                <li>
                  <a href="stickynote.html">Sticky Note</a>
                </li>
                <li>
                  <a href="timeline.html">Timeline</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i data-feather="bar-chart-2" /> <span> Charts </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="chart-apex.html">Apex Charts</a>
                </li>
                <li>
                  <a href="chart-js.html">Chart Js</a>
                </li>
                <li>
                  <a href="chart-morris.html">Morris Charts</a>
                </li>
                <li>
                  <a href="chart-flot.html">Flot Charts</a>
                </li>
                <li>
                  <a href="chart-peity.html">Peity Charts</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i data-feather="award" />
                <span> Icons </span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="icon-fontawesome.html">Fontawesome Icons</a>
                </li>
                <li>
                  <a href="icon-feather.html">Feather Icons</a>
                </li>
                <li>
                  <a href="icon-ionic.html">Ionic Icons</a>
                </li>
                <li>
                  <a href="icon-material.html">Material Icons</a>
                </li>
                <li>
                  <a href="icon-pe7.html">Pe7 Icons</a>
                </li>
                <li>
                  <a href="icon-simpleline.html">Simpleline Icons</a>
                </li>
                <li>
                  <a href="icon-themify.html">Themify Icons</a>
                </li>
                <li>
                  <a href="icon-weather.html">Weather Icons</a>
                </li>
                <li>
                  <a href="icon-typicon.html">Typicon Icons</a>
                </li>
                <li>
                  <a href="icon-flag.html">Flag Icons</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i data-feather="columns" /> <span> Forms </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="form-basic-inputs.html">Basic Inputs </a>
                </li>
                <li>
                  <a href="form-input-groups.html">Input Groups </a>
                </li>
                <li>
                  <a href="form-horizontal.html">Horizontal Form </a>
                </li>
                <li>
                  <a href="form-vertical.html"> Vertical Form </a>
                </li>
                <li>
                  <a href="form-mask.html">Form Mask </a>
                </li>
                <li>
                  <a href="form-select2.html">Form Select2 </a>
                </li>
                <li>
                  <a href="form-fileupload.html">File Upload </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i data-feather="layout" /> <span> Table </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="tables-basic.html">Basic Tables </a>
                </li>
                <li>
                  <a href="data-tables.html">Data Table </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/product.svg" alt="img" />
                <span> Application</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="chat.html">Chat</a>
                </li>
                <li>
                  <a href="calendar.html">Calendar</a>
                </li>
                <li>
                  <a href="email.html">Email</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/time.svg" alt="img" />
                <span> Report</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="purchaseorderreport.html">Purchase order report</a>
                </li>
                <li>
                  <a href="inventoryreport.html">Inventory Report</a>
                </li>
                <li>
                  <a href="salesreport.html">Sales Report</a>
                </li>
                <li>
                  <a href="invoicereport.html">Invoice Report</a>
                </li>
                <li>
                  <a href="purchasereport.html">Purchase Report</a>
                </li>
                <li>
                  <a href="supplierreport.html">Supplier Report</a>
                </li>
                <li>
                  <a href="customerreport.html">Customer Report</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/users1.svg" alt="img" />
                <span> Users</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="newuser.html">New User </a>
                </li>
                <li>
                  <a href="userlists.html">Users List</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <img src="assets/img/icons/settings.svg" alt="img" />
                <span> Settings</span> <span className="menu-arrow" />
              </a>
              <ul>
                <li>
                  <a href="generalsettings.html">General Settings</a>
                </li>
                <li>
                  <a href="emailsettings.html">Email Settings</a>
                </li>
                <li>
                  <a href="paymentsettings.html">Payment Settings</a>
                </li>
                <li>
                  <a href="currencysettings.html">Currency Settings</a>
                </li>
                <li>
                  <a href="grouppermissions.html">Group Permissions</a>
                </li>
                <li>
                  <a href="taxrates.html">Tax Rates</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Product Add</h4>
            <h6>Create new product</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
              <div>
                <div className="form-group">
                  <label>Product Name</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="select">
                    <option>Choose Category</option>
                    <option>Computers</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Sub Category</label>
                  <select className="select">
                    <option>Choose Sub Category</option>
                    <option>Fruits</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Brand</label>
                  <select className="select">
                    <option>Choose Brand</option>
                    <option>Brand</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Unit</label>
                  <select className="select">
                    <option>Choose Unit</option>
                    <option>Unit</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>SKU</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Minimum Qty</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input type="text" />
                </div>
              </div>
              <div className="sm:col-span-2 lg:col-span-4">
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Tax</label>
                  <select className="select">
                    <option>Choose Tax</option>
                    <option>2%</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Discount Type</label>
                  <select className="select">
                    <option>Percentage</option>
                    <option>10%</option>
                    <option>20%</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label>Price</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label> Status</label>
                  <select className="select">
                    <option>Closed</option>
                    <option>Open</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2 lg:col-span-4">
                <div className="form-group">
                  <label> Product Image</label>
                  <div className="image-upload">
                    <input type="file" />
                    <div className="image-uploads">
                      <img src="assets/img/icons/upload.svg" alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <a href="javascript:void(0);" className="btn btn-submit mr-2">
                  Submit
                </a>
                <a href="productlist.html" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="assets/js/jquery-3.6.0.min.js" type="9195b1c6362093a966594318-text/javascript"></script>

<script src="assets/js/feather.min.js" type="9195b1c6362093a966594318-text/javascript"></script>

<script src="assets/js/jquery.slimscroll.min.js" type="9195b1c6362093a966594318-text/javascript"></script>

<script src="assets/js/jquery.dataTables.min.js" type="9195b1c6362093a966594318-text/javascript"></script>

<script src="assets/js/flowbite.js" type="9195b1c6362093a966594318-text/javascript"></script>
<script src="assets/js/alpine.min.js" defer type="9195b1c6362093a966594318-text/javascript"></script>

<script src="assets/plugins/select2/js/select2.min.js" type="9195b1c6362093a966594318-text/javascript"></script>

<script src="assets/plugins/sweetalert/sweetalert2.all.min.js" type="9195b1c6362093a966594318-text/javascript"></script>
<script src="assets/plugins/sweetalert/sweetalerts.min.js" type="9195b1c6362093a966594318-text/javascript"></script>

<script src="assets/js/flowbite.js" type="9195b1c6362093a966594318-text/javascript"></script>
<script src="assets/js/script.js" type="9195b1c6362093a966594318-text/javascript"></script>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="9195b1c6362093a966594318-|49" defer></script>
</>

  );
}

