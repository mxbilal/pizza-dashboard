import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
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

const ProductDetail = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  // Function to fetch sales data by ID
  const getProductById = async (id) => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.products.getProductById(id);
      if (response.status === 200) {
        let data = response?.data?.data;
        setDetail(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };

  const handleDelete = async () => {
    const response = await LAMT_API.endpoints.clientAdmin.products.deleteProductById(id)
    if (response.status === 200) {
      showAlert.success(response?.data?.message)
      navigate('/sales/:id')
    }
    else showAlert.failure(response?.data?.message)
  }
  // Fetch sales data when the component mounts
  useEffect(() => {
    getProductById(id);
  }, []);

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
              
                  <div  className="esi-content" key={detail?.id}>
                    <img src={VehicleExpense} alt="vehicle-expense" />
                    <div className="esic-inner">
                    
                     

                    {/* <p className="esic-heading">ID:</p><br/>
                  <p className="esich-para">{detail?.id}</p>
                  <p className="esic-heading">User ID:</p><br/>
                  <p className="esich-para">{detail?.user_id}</p> */}
                  <p className="esic-heading">Name:</p><br/>
                  <p className="esich-para">{detail?.name}</p>
                  {/* <p className="esic-heading">Status:</p><br/>
                  <p className="esich-para">{detail?.status}</p> */}
                  <p className="esic-heading">Unit:</p><br/>
                  <p className="esich-para">{detail?.unit}</p>
                  <p className="esic-heading">Price:</p><br/>
                  <p className="esich-para">{detail?.price}</p>
                  <p className="esic-heading">Type:</p><br/>
                  <p className="esich-para">{detail?.type}</p>
                  <p className="esic-heading">VAT Type:</p><br/>
                  <p className="esich-para">{detail?.vat_type}</p>
                  <p className="esic-heading">VAT Rate:</p><br/>
                  <p className="esich-para">{detail?.vat_rate}</p>
                  {/* <p className="esic-heading">Created At:</p><br/>
                  <p className="esich-para">{detail?.created_at}</p>
                  <p className="esic-heading">Updated At:</p><br/>
                  <p className="esich-para">{detail?.updated_at}</p> */}
                  <button className="btn-delete" onClick={handleDelete}>Delete</button>


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

export default ProductDetail;
