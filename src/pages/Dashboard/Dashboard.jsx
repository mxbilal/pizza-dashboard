import React from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import CashBalance from '../../assets/img/cash-balance.png'
import OwnedBusiness from '../../assets/img/owned-business.png'
import BusinessOwes from '../../assets/img/business-owes.png'
import DividendAvailable from '../../assets/img/dividend-available.png'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Invoice from '../../assets/img/invoice.png'
import Dividend from '../../assets/img/dividend-available.png'
import ReferFriend from '../../assets/img/refer-friend.png'
import Subscription from '../../assets/img/subscription.png'
import Expense from '../../assets/img/expense.png'
import BankAccount from '../../assets/img/bank-account.png'




const Dashboard = () => {
  return (
   <>
     <div className='main-area'>
      <div className="sidebar-area">
      <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar/>
        <div className="content-section">
          <div className="stats-area">
            <div className="cards">
              <div className="card-info">
                <p>Cash Balance</p>
                <img src={CashBalance} alt="Cash-Balance" className='stat-img'/>
              </div>
              <p className="amount">£500.00</p>
              <div className="week-summary">
                <p className="percent">
                  <ShowChartIcon/>17%
                </p>

                <p className="summery-days">
                  Since Last Week
                </p>
              </div>
            </div>

            <div className="cards">
              <div className="card-info">
                <p>Owed to Business</p>
               <img src={OwnedBusiness} alt="Owned-Business" className='stat-img'/>
              </div>
              <p className="amount">£482.00</p>
              <div className="week-summary">
                <p className="percent">
                  <ShowChartIcon/>30%
                </p>

                <p className="summery-days">
                  Since Last Week
                </p>
              </div>
            </div>

            <div className="cards">
              <div className="card-info">
                <p>Business Owes</p>
                <img src={BusinessOwes} alt="Owned-Business" className='stat-img'/>
              </div>
              <p className="amount">£3041.00</p>
              <div className="week-summary">
                <p className="percent">
                  <ShowChartIcon/>10%
                </p>

                <p className="summery-days">
                  Since Last Week
                </p>
              </div>
            </div>

            <div className="cards">
              <div className="card-info">
                <p>Dividends Available</p>
                <img src={DividendAvailable} alt="Dividend-Available" className='stat-img'/>
              </div>
              <p className="amount">£5.00</p>
              <div className="week-summary">
                <p className="percent">
                  <ShowChartIcon/>5%
                </p>

                <p className="summery-days">
                  Since Last Week
                </p>
              </div>
            </div>
          </div>

          {/* ============== Shortcuts ================ */}
          <div className="shortcut-start">
            <div className="shortcut-inner">
              <div className="sc-heading">
                <p>Shortcuts</p>
              </div>

              <div className="sci-cards">
                <div className="sci-area">
                  <div className="sci-start">
                    <div className="sci-icon">
                      <img src={Invoice} alt="Invoice" className='shortcut-icon'/>
                      <div className="sci-text">
                        <p>Send an Invoice</p>
                      </div>
                    </div>
                  </div>

                  <div className="sci-start">
                    <div className="sci-icon">
                     <img src={Dividend} alt="Dividend" className='shortcut-icon'/>
                      <div className="sci-text">
                        <p>Pay a Dividend</p>
                      </div>
                    </div>
                  </div>

                  <div className="sci-start">
                    <div className="sci-icon">
                      <img src={ReferFriend} alt="Refer-Friend" className='shortcut-icon'/>
                      <div className="sci-text">
                        <p>Refer a Friend</p>
                      </div>
                    </div>
                  </div>

                  <div className="sci-start">
                    <div className="sci-icon">
                     <img src={Subscription} alt="Subscription" className='shortcut-icon'/>
                      <div className="sci-text">
                        <p>Manage Subscription</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="sci-area">
                  <div className="sci-start">
                    <div className="sci-icon">
                     <img src={Expense} alt="Expense" className='shortcut-icon'/>
                      <div className="sci-text">
                        <p>Add an Expense</p>
                      </div>
                    </div>
                  </div>

                  <div className="sci-start">
                    <div className="sci-icon">
                      <img src={BankAccount} alt="Bank-Account" className='shortcut-icon'/>
                      <div className="sci-text">
                      <p>Add a Bank Account</p>
                      
                      </div>
                    </div>
                  </div>

                  <div className="sci-start">
                    <div className="sci-icon">
                      <img src={Invoice} alt="Invoice" className='shortcut-icon'/>
                      <div className="sci-text">
                      <p>Add new sales invoice</p>
                      </div>
                    </div>
                  </div>

                  <div className="sci-start">
                    <div className="sci-icon">
                      <img src={Invoice} alt="Invoice" className='shortcut-icon'/>
                      <div className="sci-text">
                        <p>Personal tax report</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>

          {/* ============== Reminders ============== */}

          <div className="reminders-start">
            <div className="reminder-inner">
             <div className="reminder-top">
             <div className="ri-heading">
             <p>Reminders</p>
             </div>
            
             <div className="ri-dates">
              <p>Monthly</p>
              <ExpandMoreIcon className='ri-dropdown-arrow'/>
             </div>
            </div>

            <div className="ri-stats-list">
              <div className="risl-start">
                <div className="risl-img">
                  <img src={Invoice} alt="Invoice" className='invoice-image'/>
                </div>

                <div className="risl-brand">
                  <span className='risl-invoice-quote'>Invoice #1 is Due in next 5 days</span>
                  <p>Reminders</p>
                </div>

                <div className="risl-states">
                  <p>waiting</p>
                </div>
              </div>

              <div className="risl-start">
                <div className="risl-img">
                <img src={Invoice} alt="Invoice" className='invoice-image'/>
                </div>

                <div className="risl-brand">
                  <span className='risl-invoice-quote'>Invoice #1 is Due in next 5 days</span>
                  <p>Reminders</p>
                </div>

                <div className="risl-states">
                  <p>waiting</p>
                </div>
              </div>

              <div className="risl-start">
                <div className="risl-img">
                <img src={Invoice} alt="Invoice" className='invoice-image'/>
                </div>

                <div className="risl-brand">
                  <span className='risl-invoice-quote'>Invoice #1 is Due in next 5 days</span>
                  <p>Reminders</p>
                </div>

                <div className="risl-states">
                  <p>waiting</p>
                </div>
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

export default Dashboard