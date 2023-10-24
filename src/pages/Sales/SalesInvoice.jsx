import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const SalesInvoice = () => {
    return (
        <>
            <div className="main-area">
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />
                    <div className="sales-invoice">
                        <div className="inner-sale-invoice">
                            <div className="start-invoice">
                                <div className="top-heading-invoice">
                                    <h5>Add Invoice</h5>
                                </div>
                                <div className="right-info">
                                    <h2>Emerj Limited</h2><br />
                                    <p>86-90 Paul Street</p>
                                    <p>London, EC2A 4NE</p>
                                    <p>United Kingdom</p>
                                    <h2>waqqas@emerj.io</h2>
                            </div>

                            <div className="left-info">
                                    <h2>Emerj Limited</h2><br />
                                    <p>86-90 Paul Street</p>
                                    <p>London, EC2A 4NE</p>
                                    <p>United Kingdom</p>
                                    <h2>waqqas@emerj.io</h2>
                            </div>

                            <div>
                                <div className="add-new-line">
                                    <p>Add New Line</p>
                                </div>

                                <div className='totalAmount'>
                                    <p>Subtotal: <span>400</span></p>
                                    <p>VAT: <span>65</span></p>
                                    <p>Total: <span>465</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
  </>
  )
}

export default SalesInvoice