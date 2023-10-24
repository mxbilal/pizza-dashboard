import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PokcetExpense from "../../assets/img/pocket-expense.png";
import Invoice from '../../assets/img/invoice.png'
import { useNavigate } from "react-router-dom";

const AddNewSupplier = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="purchases-section">
            <div className="purchases-area">
              <div className="purchases-inner">
                <TabView>
                  <TabPanel header="Invoices">

                    <div className="purchases-content">
                      <img src={PokcetExpense} className='purchase-add-icon' alt="purchase-add-icon" />
                      <div className="purchases-inner-content">
                        <p onClick={() => navigate('/add-suplier-invoice')}>Add a supplier invoice</p>
                      </div>
                    </div>

                    <div className="purchases-Overdue-heading">
                      <p>Overdue</p>
                    </div>
                    
                    <div className="purchases-get-area">
                      <div className="pga-left">
                      <div className="purchases-content-area">
                      <img src={Invoice} className='purchase-add-icon' alt="purchase-invoice" />
                      <div className="purchases-inner-content">
                        <p>Invoice #1 is Due in next 5 days</p>
                        <span>28th February 2023</span>
                      </div>
                    </div>
                      </div>
                      <div className="pga-right">
                      <div className="pgar-amount">
                        <p>£6.00</p>
                        <span>£1.00 VAT</span>
                      </div>
                      </div>
                    </div>


                  </TabPanel>
                  <TabPanel header="Suppliers">
                  <div className="purchases-content">
                      <img src={PokcetExpense} className='purchase-add-icon' alt="purchase-add-icon" />
                      <div className="purchases-inner-content">
                        <p onClick={() => navigate('/add-suplier')}>Add new supplier</p>
                      </div>
                    </div>
                    
                    <div className="purchases-get-area">
                      <div className="pga-left">
                      <div className="purchases-content-area">
                      <img src={Invoice} className='purchase-add-icon' alt="purchase-invoice" />
                      <div className="purchases-inner-content">
                        <p>Jack jones</p>
                        <span>jack@gmail.com</span>
                      </div>
                    </div>
                      </div>
                    </div>
                  </TabPanel>

                </TabView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNewSupplier