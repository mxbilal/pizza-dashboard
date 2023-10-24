import React, { useEffect, useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PokcetExpense from "../../assets/img/pocket-expense.png";
import OperationExpense from "../../assets/img/operation-expese.png";
import Invoice from '../../assets/img/invoice.png'
import { useNavigate } from "react-router-dom";
import { LAMT_API } from '../../api';
import { showAlert } from '../../utils';
import VehicleExpense from "../../assets/img/vehicle-expense.png";


const Purchases = () => {
  const navigate = useNavigate()
  const [purchase, setPurchase] = useState([])

  const getPurchases = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.purchases.getPurchases()
      if (response.status === 200) {
        setPurchase(Object.values(response?.data?.data ?? { data: [] }).flat())
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getPurchases()
  }, [])
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="purchases-section">
            <div className="purchases-area">
              <div className="purchases-inner">
                <TabView>
                  <TabPanel header="Invoices">

                    <div className="purchases-content">
                      <img src={PokcetExpense} className='purchase-add-icon' alt="purchase-add-icon" />
                      <div className="purchases-inner-content">
                        <p onClick={() => navigate(`/add-purchase`)}>Add a supplier invoice</p>
                      </div>
                    </div>

                    <div className="purchases-Overdue-heading">
                      <p>Overdue</p>
                    </div>

                    {purchase?.filter(item => item?.current_role == 'vendor')?.map(cl => <div onClick={() => { navigate(`/purchases/invoice/${cl?.id}`) }} className="esi-content">
                      <img src={OperationExpense} alt="vehicle-expense" />
                      <div className="esic-inner">
                        <p className="esic-heading">{cl?.first_name + " " + cl?.last_name} <br />
                          <span className="esich-para">{cl?.email}</span></p>
                      </div>
                    </div>)
                    }

                  </TabPanel>
                  <TabPanel header="Suppliers">
                    <div className="purchases-content">
                      <img src={PokcetExpense} className='purchase-add-icon' alt="purchase-add-icon" />
                      <div className="purchases-inner-content">
                        <p onClick={() => navigate('/add-suplier')}>Add new supplier</p>
                      </div>
                    </div>

                    <div className="purchases-get-area">
                      <div className="pga-left">
                        <div className="purchases-content-area">
                          <img src={Invoice} className='purchase-add-icon' alt="purchase-invoice" />
                          <div className="purchases-inner-content">
                            <p>Jack jones</p>
                            <span>jack@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Purchases