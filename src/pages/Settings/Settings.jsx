import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ProfitLossIcon from "../../assets/img/profit-loss-icon.png";
import PersonalTaxInvoice from "../../assets/img/personaltaxreport.png";
import DirectorIcon from "../../assets/img/director.png";
import ConnectionIcon from "../../assets/img/connections.png";
import VatIcon from "../../assets/img/vat.png";
import PayrollIcon from "../../assets/img/payroll.png";
import AccountsIcon from "../../assets/img/accounts.png";
import ReferFriends from "../../assets/img/referaccount.png";
import ManageSubscription from "../../assets/img/managesubscription.png";
import LogOut from "../../assets/img/logout.png";

const Settings = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="expenses-section">
            <div className="es-area">
              <div className="es-inner">
                <div className="esi-content">
                  <img src={ProfitLossIcon} alt="profile-icon" />
                  <div className="esic-inner">
                    <p className="esic-heading">Business</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={DirectorIcon} alt="balancesheet-icon" />
                  <div className="esic-inner">
                    <p className="esic-heading">Director</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={ConnectionIcon} alt="dividend-icon" />
                  <div className="esic-inner">
                    <p className="esic-heading">Manage connections</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={PersonalTaxInvoice} alt="money-owed" />
                  <div className="esic-inner">
                    <p className="esic-heading">Invoicing</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={VatIcon} alt="money-owed" />
                  <div className="esic-inner">
                    <p className="esic-heading">VAT</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={PayrollIcon} alt="personal-tax-invoice" />
                  <div className="esic-inner">
                    <p className="esic-heading">Payroll</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={PersonalTaxInvoice} alt="personal-tax-invoice" />
                  <div className="esic-inner">
                    <p className="esic-heading">Opening balances</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={AccountsIcon} alt="personal-tax-invoice" />
                  <div className="esic-inner">
                    <p className="esic-heading">Advanced accounting</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={ReferFriends} alt="personal-tax-invoice" />
                  <div className="esic-inner">
                    <p className="esic-heading">Refer a friend</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={ManageSubscription} alt="personal-tax-invoice" />
                  <div className="esic-inner">
                    <p className="esic-heading">Manage Subscription</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={LogOut} alt="personal-tax-invoice" />
                  <div className="esic-inner">
                    <p className="esic-heading">Logout</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings