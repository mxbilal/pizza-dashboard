import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DividendPay from '../../assets/img/invoice.png'
import DividendAvailable from '../../assets/img/dividend-available.png'
import PayTax from '../../assets/img/pay-tax.png'
import { useNavigate } from 'react-router-dom';

const Dividend = () => {
  const navigate = useNavigate();
  const payDivident = () =>{
  navigate('/pay-dividend')
  }
  return (
    <>
    <div className="main-area">
      <div className="sidebar-area">
        <Sidebar />
      </div>
      <div className="dashboardContainer">
        <Navbar />
        <div className="dividend-area">
            <div className="da-start">
                <div className="da-inner">
                    <div className="dai-top" onClick={payDivident} style={{cursor:'pointer'}}>
                        <img src={DividendPay} alt="Dividend-Pay" />
                        <p className='dait-heading'>Pay yourself a dividend</p>
                    </div>
                    <div className="dai-content">
                        <div className="daic-dividend">
                        <img src={DividendAvailable} alt="Dividend-Available" />
                        <div className="daicd-inner">
                        <p className='divid-text'>Dividends paid 22/23</p>
                        <p className='divid-price'>£150.00</p>
                        </div>
                        </div>

                        <div className="daic-tax-to-set">
                        <img src={PayTax} alt="Pay-Tax" />
                        <div className="daicd-inner">
                        <p className='divid-text'>Personal tax to set aside 22/23</p>
                        <p className='divid-price'>£400.00</p>
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

export default Dividend