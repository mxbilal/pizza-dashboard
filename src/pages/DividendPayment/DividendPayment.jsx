import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DividendPay from "../../assets/img/invoice.png";
import DividendAvailable from "../../assets/img/dividend-available.png";
import PayTax from "../../assets/img/pay-tax.png";

const DividendPayment = () => {
  return (
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className="dividend-payment-area">
          <div className="dap-start">
            <div className="dap-inner">
              <div className="daip-content">
                <div className="daicp-dividend">
                  <img src={DividendAvailable} alt="Dividend-Available" />
                  <div className="daicdp-inner">
                    <p className="dividp-text">Dividends available</p>
                    <p className="dividp-price">-£2,698</p>
                  </div>
                </div>

                <div className="daicp-tax-to-set">
                  <img src={PayTax} alt="Pay-Tax" />
                  <div className="daicdp-inner">
                    <p className="dividp-text">0% tax left</p>
                    <p className="dividp-price">£13,570</p>
                  </div>
                </div>
              </div>

              <div className="daipc-inner">
                <div className="daipci-start">
                  <p className="daipcis-text">
                    How much dividends would you like to pay yourself ?
                  </p>
                </div>
                <div className="daipc-inner-tab">
                  <div className="daipcit-input">
                    <input type="text" placeholder="£ 1000" />
                  </div>
                  <div className="daipcit-allocate">
                    <button className="allocated-available-btn">
                      Allocate available
                    </button>
                  </div>

                  <div className="daipcit-allocate-next">
                    <button className="allocated-next-btn">
                      Allocate up to next band
                    </button>
                  </div>
                </div>
              </div>

              <div className="dividend-pay-content-area">
                <div className="dpca">
                  <div className="dpcai">
                    <div className="dpcai-text">
                      <p className="dpcait-para">Take home after tax</p>
                      <p className="dpcait-amount">£0.00</p>
                    </div>

                    <div className="dpcai-text">
                      <p className="dpcait-para">Personal tax to set aside</p>
                      <p className="dpcait-amount">£0.00</p>
                    </div>

                    <div className="dpcai-total">
                      <p className="dpcait-total-para">
                        Personal tax to set aside
                      </p>
                      <p className="dpcait-total-amount">£0.00</p>
                    </div>
                  </div>
                </div>
                <div className="dpca-head">
                  <p>
                    To enable dividend payments you need to connect your company
                    bank account. <span className="dpcah-bold">Tap here to connect your business bank.</span>
                  </p>
                  <button className="dpcah-btn">Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DividendPayment;
