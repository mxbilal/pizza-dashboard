import React from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import DataSecurity from '../../assets/img/data-security.png'
import TransactionInner from '../../assets/img/transaction-inner.png'
import Controller from '../../assets/img/controll.png'
import BalanceData from '../../assets/img/balance-data.png'

const Transaction = () => {
  return (
    <>
    <div className='main-area'>
     <div className="sidebar-area">
     <Sidebar />
     </div>
     <div className="dashboardContainer">
       <Navbar/>
       
       <div className="transaction-content">
        <div className="tc-inner">
          <div className="tc-inner-area">
            <div className="tcia-left">
              <div className="tcial-inner">
                <div className="tcial-top-heading">
                  <p className='top-heading'> Connect your accounts to get started</p>
                  <div className="tcial-inner-section">
                    <div className="tcialis-area-img">
                      <img src={DataSecurity} alt="Data-Security" />
                    </div>
                    <div className="tcialis-area-text">
                    <p className="tcialista-th">Share your data securely</p>
                      <p className='tcialista-des'>To keep your information secure, we use bank-grade encryption to connect to your bank account, either directly or via TrueLayer.</p>
                    </div>
                  </div>

                  <div className="tcial-inner-section">
                    <div className="tcialis-area-img">
                      <img src={Controller} alt="Controller" />
                    </div>
                    <div className="tcialis-area-text">
                    <p className="tcialista-th">You're in control</p>
                      <p className='tcialista-des'>You can disconnect your HMRC and bank accounts and stop sharing your data with Look After My Taxes at any time.</p>
                    </div>
                  </div>

                  <div className="tcial-inner-section">
                    <div className="tcialis-area-img">
                      <img src={BalanceData} alt="Balance-Data" />
                    </div>
                    <div className="tcialis-area-text">
                    <p className="tcialista-th">Opening balance dates</p>
                      <p className='tcialista-des'>We'll start pulling data from the date you last filed a set of accounts, or you can select a different start date.</p>
                    </div>
                  </div>

                  <div className="button-connect">
                    <button className='add-connect'>+ Add a bank account</button>
                  </div>

                  <div className="transaction-end-para">
                    <p className="tep">Look After My Taxes is FCA-regulated and won't share your <br/> Personal data. 
                    <span className='trans-indicator'> See our terms.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tcia-right">
              <div className="tcia-img">
                <img src={TransactionInner} alt="Transaction-Inner" />
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

export default Transaction