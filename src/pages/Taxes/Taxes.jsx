import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";  
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PayTaxIcon from '../../assets/img/pay-tax.png'

const Taxes = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
      <div className="taxes-section">
        <div className="taxes-inner">
            <div className="taxes-start">
            <TabView>
    <TabPanel header="Upcoming Taxes">
        <p className="m-0">
            <button className='btn-taxes-all'>All</button>
            <button className='btn-taxes-ac'>Annual Accounts</button>
            <button className='btn-taxes-ct'>Corporation Tax</button>
            <button className='btn-taxes-other'>Other</button>

        <p className="uct-para"> Due 8th DecLAMT 2023 (in 7 months)</p>

        <div className="uct-inner-content">
          <div className="uctic-area">
            <div className="uctic-content-start">
              <img src={PayTaxIcon} alt="Pay-Tax-Icon" />
              <p className='uctic-inner-para'><span>Confirmation Statement</span><br/>
              25th Nov 2022 - 24th Nov 2023</p>
            </div>

            <div className="uctic-content-start">
              <img src={PayTaxIcon} alt="Pay-Tax-Icon" />
              <p className='uctic-inner-para'><span>Annual Accounts</span><br/>
              15th Nov 2022 - 30th Nov 2023</p>
            </div>

            <div className="uctic-content-start">
              <img src={PayTaxIcon} alt="Pay-Tax-Icon" />
              <p className='uctic-inner-para'><span>First Corporation Tax Payment</span><br/>
              15th Nov 2022 - 14th Nov 2023</p>
            </div>
          </div>
        </div>
        </p>
    </TabPanel>
    <TabPanel header="Submitted Taxes">
        <p className="m-0">
        <div className="uct-inner-content">
          <div className="uctic-area">
            <div className="uctic-content-start">
              <img src={PayTaxIcon} alt="Pay-Tax-Icon" />
              <p className='uctic-inner-para'><span>Confirmation Statement</span><br/>
              24th Nov 2023</p>
            </div>

            <div className="uctic-content-start">
              <img src={PayTaxIcon} alt="Pay-Tax-Icon" />
              <p className='uctic-inner-para'><span>Annual Accounts</span><br/>
              30th Nov 2023</p>
            </div>

            <div className="uctic-content-start">
              <img src={PayTaxIcon} alt="Pay-Tax-Icon" />
              <p className='uctic-inner-para'><span>First Corporation Tax Payment</span><br/>
              14th Nov 2023</p>
            </div>
          </div>
        </div>
        </p>
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

export default Taxes