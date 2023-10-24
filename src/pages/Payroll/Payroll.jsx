import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PayrollImage from "../../assets/img/payroll-img.png";
import MonthlyPay from "../../assets/img/controll.png";
import EmployeePay from "../../assets/img/team-employee.png";

const Payroll = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="payroll-section">
            <div className="payroll-inner">
              <div className="payroll-start">
                <div className="pr-left-area">
                  <div className="prla-inner">
                    <div className="prla-top-heading">
                      <p className="prla-heading">Get started with payroll</p>
                    </div>
                    <div className="prla-content">
                      <img src={MonthlyPay} alt="Monthly-Pay" />
                      <p className="prla-para">
                        File your monthly pay runs directly to HMRC.
                      </p>
                    </div>

                    <div className="prla-content">
                      <img src={MonthlyPay} alt="Monthly-Pay" />
                      <p className="prla-para">
                        Access unlimited advice and support from our team of
                        experts.
                      </p>
                    </div>

                    <div className="prla-content">
                      <img src={EmployeePay} alt="Employee-Pay" />
                      <p className="prla-para">
                        Add your team from £4+VAT per employee per month.
                      </p>
                    </div>

                    <button className="btn-get-started">Get Started</button>

                    <div className="bottom-line">
                      <p className="bottomLine-para">
                        Look After My Taxes is FCA-regulated and won't share
                        your Personal data. <span className="bl-bold">See our terms.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-right-area">
                  <img src={PayrollImage} alt="Payroll-Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payroll;
