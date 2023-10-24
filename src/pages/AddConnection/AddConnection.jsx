import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import HMRC from "../../assets/img/hmrc.png";
import BnkAccount from "../../assets/img/bnk-accounts.png";
import Stripe from "../../assets/img/stripe.png";
import Lock from '../../assets/img/lock.png'

const AddConnection = () => {
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />

          <div className="manage-connection-section">
            <div className="mc-area">
              <div className="mca-inner">
                <div className="mcai-top">
                  <div className="mcai-left">
                    <div className="mcai-top-img">
                      <img src={HMRC} alt="HMRC" />
                    </div>
                    <div className="mcai-top-text">
                      <div className="mcai-top-text-area">
                        <p className="mcai-top-th">HMRC</p>
                        <p className="mcai-top-danger">No Connected</p>
                      </div>
                      <p className="mcai-top-des-main">
                        Connect HMRC to see and start filing your VAT returns.
                      </p>
                    </div>
                  </div>
                  <div className="mcai-right">
                    <div className="mcair-inner">
                      <img src={Lock} alt="Lock" />
                      <p>Connect</p>
                    </div>
                    </div>
                </div>

                <div className="mcai-top">
                  <div className="mcai-left">
                    <div className="mcai-top-img">
                      <img src={BnkAccount} alt="Bank-Account" />
                    </div>
                    <div className="mcai-top-text">
                      <div className="mcai-top-text-area-2">
                        <p className="mcai-top-th-2">Bank accounts</p>
                        <p className="mcai-top-danger-2">No Connected</p>
                      </div>
                      <p className="mcai-top-des">
                      Connect your bank account so we can get your transactions, reconcile them & create reports.
                      </p>
                    </div>
                  </div>
                  <div className="mcai-right">
                    <div className="mcair-inner">
                      <img src={Lock} alt="Lock" />
                      <p>Connect</p>
                    </div>
                    </div>
                </div>


                <div className="mcai-top">
                  <div className="mcai-left">
                    <div className="mcai-top-img">
                      <img src={Stripe} alt="Stripe" />
                    </div>
                    <div className="mcai-top-text">
                      <div className="mcai-top-text-area-2">
                        <p className="mcai-top-th-2">Stripe</p>
                        <p className="mcai-top-danger-2">No Connected</p>
                      </div>
                      <p className="mcai-top-des">
                      Connect your Stripe account to see Stripe payments in your transaction records.
                      </p>
                    </div>
                  </div>
                  <div className="mcai-right">
                    <div className="mcair-inner">
                      <img src={Lock} alt="Lock" />
                      <p>Connect</p>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddConnection;
