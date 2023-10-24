import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PokcetExpense from "../../assets/img/pocket-expense.png";
import VehicleExpense from "../../assets/img/vehicle-expense.png";
import OperationExpense from "../../assets/img/operation-expese.png";
import ImvestmentExpense from "../../assets/img/investment-expense.png";
import PhoneExpense from "../../assets/img/phone-expense.png";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";

const AddClient = () => {
  const navigate = useNavigate()
  const [clients, setCliens] = useState([])
  const [load, setLoad] = useState(true)
  const getClients = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.clients.getAll()
      if (response.status === 200) {
        let data = response?.data?.data
        setLoad(false)
        setCliens(data)

      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getClients()
  }, [])
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
                <div className="esi-top">
                  <img src={PokcetExpense} alt="pokcet-expense" />
                  <p className="esit-heading" onClick={() => navigate('/add-client')}>Add new client</p>
                </div>

                {!load ? clients?.filter(item => item?.current_role == 'client')?.map(cl => <div onClick={()=>{navigate(`/sales/${cl?.id}`)}} className="esi-content">
                  <img src={OperationExpense} alt="vehicle-expense" />
                  <div className="esic-inner">
                    <p className="esic-heading">{cl?.first_name + " " + cl?.last_name} <br />
                      <span className="esich-para">{cl?.email}</span></p>
                  </div>
                </div>)
                  : 'loading...'}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient