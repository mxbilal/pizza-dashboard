import React from 'react'
import Logo from '../../assets/img/logo.png'
import '../../index.scss'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TransactionBadge from '../../assets/img/transaction-sb.png'
import Expenses from '../../assets/img/expenses-sb.png'
import Dividend from '../../assets/img/dividend-sb.png'
import Sales from '../../assets/img/sales-sb.png'
import Purchases from '../../assets/img/purchase-sb.png'
import PayRoll from '../../assets/img/payroll-sb.png'
import Taxes from '../../assets/img/taxes-sb.png'
import Report from '../../assets/img/report-sb.png'
import MarketPlace from '../../assets/img/marketplace-sb.png'
import Chat from '../../assets/img/chat-sb.png'
import ReferFriend from '../../assets/img/refer-sb.png'
import Setting from '../../assets/img/setting-sb.png'



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>
                <img src={Logo} alt="" />
            </span>
        </div>
        <div className="center">
            <ul>
                <li>
                    <Link to="/">
                    <DashboardIcon className='list-icon'/><span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/users">
                    <img src={ReferFriend} alt="" className="sidebar-img-logo"/><span>Users</span>
                    </Link>
                </li>
                
                <li>
                <Link to="/transaction">
                    <img src={TransactionBadge} alt="" className="sidebar-img-logo" /><span>Transaction</span>
                    </Link>
                </li>

                <li>
                <Link to="/expenses">
                   <img src={Expenses} alt="" className="sidebar-img-logo" />
                   <span>Expenses</span>
                    </Link>
                </li>

                <li>
                <Link to="/dividend">
                   <img src={Dividend} alt="" className="sidebar-img-logo" />
                   <span>Dividend</span>
                    </Link>
                </li>

                <li>
                <Link to="/sales">
                   <img src={Sales} alt="" className="sidebar-img-logo" />
                   <span>Sales</span>
                    </Link>
                </li>

                <li>
                <Link to="/purchases">
                    <img src={Purchases} alt="" className="sidebar-img-logo" />
                    <span>Purchases</span>
                    </Link>
                </li>

                <li>
                <Link to="/payroll">
                    <img src={PayRoll} alt="" className="sidebar-img-logo" />
                    <span>Payroll</span>
                    </Link>
                </li>

                <li>
                <Link to="/taxes">
                    <img src={Taxes} alt="" className="sidebar-img-logo" />
                    <span>Taxes</span>
                    </Link>
                </li>

                <li>
                <Link to="/reports">
                    <img src={Report} alt="" className="sidebar-img-logo" />
                    <span>Reports</span>
                    </Link>
                </li>

                <li>
                <Link to="/market-perks">
                    <img src={MarketPlace} alt="" className="sidebar-img-logo-2" />
                    <span>Marketplace & perks</span>
                    </Link>
                </li>

                <li>
                <Link to="#">
                    <img src={Chat} alt="" className="sidebar-img-logo-2" />
                    <span>Chat to an accountant</span>
                    </Link>
                </li>

                <li>
                <Link to="/refer-friends">
                    <img src={ReferFriend} alt="" className="sidebar-img-logo-2" />
                    <span>Refer a friend</span>
                    </Link>
                </li>

                <li>
                <Link to="/settings">
                   <img src={Setting} alt="" className="sidebar-img-logo" />
                   <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
       
    </div>
  )
}

export default Sidebar