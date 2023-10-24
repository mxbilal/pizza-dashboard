import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PokcetExpense from "../../assets/img/pocket-expense.png";
import VehicleExpense from "../../assets/img/vehicle-expense.png";
import OperationExpense from "../../assets/img/operation-expese.png";
import ImvestmentExpense from "../../assets/img/investment-expense.png";
import PhoneExpense from "../../assets/img/phone-expense.png";
import { TabView, TabPanel } from 'primereact/tabview';
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";


const Sales = () => {
  const navigate = useNavigate()
  const [salesList, setSalesList] = useState([])
  const [productList, setProductList] = useState([])
  const [clientList, setClientList] = useState([])

  const GetSales = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.sales.getSales()
      if (response.status === 201) {
        let data = response?.data?.data
        console.log("*************************")
        console.log(data)
        console.log("*************************")
        setSalesList([...data['Invoices']])
        // setSalesList([...data['Invoices'], ...Object.values(data['Overdue-invoices'])])
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  const GetProducts = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.products.getAll()
      if (response.status === 200) {
        let data = response?.data?.data
        setProductList(data)
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  const GetClients = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.clients.getAll()
      if (response.status === 200) {
        let data = response?.data?.data
        setClientList(data)
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    GetSales()
    GetProducts()
    GetClients()
  }, [])
  console.log(clientList)
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
              <TabView>
                <TabPanel header="Invoices">

                  <div className="es-inner">
                    <div className="esi-top">
                      <img src={PokcetExpense} alt="pokcet-expense" />
                      <p className="esit-heading" onClick={() => navigate('/add-client-sales')}>Add new sales invoice</p>
                    </div>

                    {salesList.map(list => <div onClick={() => navigate(`/sales/main/${list?.id}`)} className="esi-content" >
                      <img src={VehicleExpense} alt="vehicle-expense" />
                      <div className="esic-inner">
                        <p className="esic-heading">{list?.name} <br /><span className="esich-para">{list?.dated.split(' ')[0]}</span></p>
                        <p className="esic-price">£{list?.amount} <br /> <span className="esicp-para">£{list?.vat_rate} VAT</span></p>
                      </div>
                     
                    </div>)}
                    {/* {clientList?.filter(item => item?.current_role == 'client')?.map(client => <div onClick={() => navigate(`/sales/main/${client?.id}`)} className="esi-content" >
                      <img src={VehicleExpense} alt="vehicle-expense" />
                      <div className="esic-inner">
                        <div className="esic-inner">
                          <p className="esic-heading">{`${client?.first_name} ${client?.last_name}`} <br /><span className="esich-para">{client?.email}</span></p>

                        </div>
                      </div>
                    </div>)} */}


                  </div>


                </TabPanel>
                <TabPanel header="Products">
                  <div className="expenses-section">
                    <div className="es-area">
                      <div className="es-inner">
                        <div className="esi-top">
                          <img src={PokcetExpense} alt="pokcet-expense" />
                          <p className="esit-heading" onClick={() => navigate('/add-new-products')}>Add new product or service</p>
                        </div>

                        {productList.map(pr => <div onClick={() => navigate(`/update-delete-product/${pr?.id}`)} className="esi-content">
                          <img src={VehicleExpense} alt="vehicle-expense" />
                          <div className="esic-inner">
                            <p className="esic-heading">{pr?.name ?? ""}<br /><span className="esich-para">&pound;{pr?.price ?? 0}</span></p>
                          </div>
                        </div>)}

                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel header="Clients">
                  <div className="expenses-section">
                    <div className="es-area">
                      <div className="es-inner">
                        <div className="esi-top">
                          <img src={PokcetExpense} alt="pokcet-expense" />
                          <p className="esit-heading" onClick={() => navigate('/add-client')}>Add new client</p>
                        </div>

                        <p>Which client are you invoicing?</p>
                        {clientList?.filter(item => item?.current_role == 'client')?.map(client => <div onClick={() => navigate(`/update-delete-client/${client?.id}`)} className="esi-content" >
                          <img src={VehicleExpense} alt="vehicle-expense" />
                          <div className="esic-inner">
                            <div className="esic-inner">
                              <p className="esic-heading">{`${client?.first_name} ${client?.last_name}`} <br /><span className="esich-para">{client?.email}</span></p>

                            </div>
                          </div>
                        </div>)}


                      </div>
                    </div>
                  </div>
                </TabPanel>

              </TabView>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sales