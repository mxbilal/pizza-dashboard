import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ProfitLossIcon from "../../assets/img/profit-loss-icon.png";
import BalanceSheetIcon from "../../assets/img/balancesheet-icon.png";
import DividendIcon from "../../assets/img/dividendavailable.png";
import MoneyOwed from "../../assets/img/moneyowed.png";
import PersonalTaxInvoice from "../../assets/img/personaltaxreport.png";
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const navigate = useNavigate()
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
                <div className="esi-content" onClick={() =>navigate("/profitloss")}>
                  <img src={ProfitLossIcon} alt="profile-icon" />
                  <div className="esic-inner">
                    <p className="esic-heading">Profit & Loss</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={BalanceSheetIcon} alt="balancesheet-icon" />
                  <div className="esic-inner">
                    <p className="esic-heading">Balance Sheet</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={DividendIcon} alt="dividend-icon" />
                  <div className="esic-inner">
                    <p className="esic-heading">Dividends available to withdraw</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={MoneyOwed} alt="money-owed" />
                  <div className="esic-inner">
                    <p className="esic-heading">Money Owed To Business</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={MoneyOwed} alt="money-owed" />
                  <div className="esic-inner">
                    <p className="esic-heading">Money Business Owes</p>
                  </div>
                </div>

                <div className="esi-content">
                  <img src={PersonalTaxInvoice} alt="personal-tax-invoice" />
                  <div className="esic-inner">
                    <p className="esic-heading">Personal Tax Report</p>
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

export default Reports