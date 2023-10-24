import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { Button, MenuItem, Select } from '@mui/material';
import { date } from 'yup';

const SalesDetail = () => {
  let sum = 0;
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [clientList, setClientList] = useState(null)
  const [products, setProducts] = useState(null)
  const [data,setData]=useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState([])
  const [total, setTotal] = useState(0);
  console.log('location', location?.state)

  // Function to fetch sales data by ID
  const getSalesById = async (id) => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.sales.getSalesById(id);
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
  const getProducts = async (id) => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.products.getAll();
      if (response.status === 200) {
        let data = response?.data?.data;
        setProducts(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log('Error:', e);
    }
  };
  //Clients get api
  const GetClients = async () => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.clients.getClientById(id)
      if (response.status === 200) {
        let data = response?.data?.data
        console.log(data)
        setClientList(data)
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }
  const totalSum = () => {
    sum = 0;
    products?.map?.(product => {
      if(selectedProducts?.includes?.(product?.id)){
        sum = parseInt(sum) + parseInt(product.price)
      }
    })
    console.log("sum here", sum)
    // setTotal(sum)
    return sum
  }
  const editData = async () => {
    const response = await LAMT_API.endpoints.clientAdmin.sales(id)
    if (response.status === 200) {
      showAlert.success(response?.data?.message)
      navigate('/sales')
    }
    else showAlert.failure(response?.data?.message)
  }
  // Fetch sales data when the component mounts
  useEffect(() => {
    getSalesById(id);
    getProducts()
    GetClients()
  }, []);
  console.log("setSelectedProducts", selectedProducts)
  console.log("products", products)
  function handleSubmit(){
    let data = new FormData();
    data.append('name', 'Invoices for5Client 41'+Math.random(10));
    data.append('invoice_for_user_id', id);
    data.append('type', 'Invoice');
    data.append('issue_date', '2023-11-15');
    data.append('due_date', '2023-11-30');
    data.append('dated', '2023-11-22');
    data.append('status', 'Pending');
    data.append('vat_rate', '200');
    data.append('vat_type', 'reduced_rate');
    data.append('category_list_items', '[]');
    data.append('product_or_services', `[${selectedProducts}]`);
    data.append('amount', sum);
    LAMT_API.endpoints.clientAdmin.sales.addSales(data).then(res => {
      console.log("res after adding invoic", res);
      if(res.status === 200){
        navigate('/sales')
      } else {
        alert("Opps!! Something bad has happened.")
      }
    })
  }
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

                <div className="sales-invoice" >
                  <div className="inner-sale-invoice">
                    <div className="start-invoice">
                      <div className="top-heading-invoice">
                        <h5 style={{ padding: "10px" }}>Add Invoice</h5>
                      </div>
                      {/* <div className="right-info" key={detail?.id} style={{ width: "100%", display: "inline-block" }}>
                        <div className="ri-area" style={{ float: "right", paddingRight: "50px" }}>
                          <h2>{detail?.name}</h2>
                          <p>{detail?.amount}</p>

                        </div>

                      </div> */}

                      <div className="left-info" key={clientList?.id} style={{ paddingLeft: "50px" }}>
                        <h2>{clientList?.first_name}</h2>
                        <p>{clientList?.email}</p>
                      </div>

                      <div className="addSelectedItems">
                      <h4 style={{paddingLeft:"6%"}}>Items</h4>
                      {
                        products?.map?.(product => {
                          return (
                            selectedProducts?.includes(product?.id) ?
                              <div className='innerSelectedItem' style={{display: "flex", justifyContent: "space-between", margin: "auto 6%"}}>
                              <p>{product?.name}</p>
                              <p>{product?.price}</p>
                            </div> : ''
                          )
                        })
                      }
                      
                      
                      {/* <p>{`${location?.state?.price}`}
                      </p> */}
                      {/* <p>{location?.state?.vat_rate}</p> */}
                      </div>
                      

                      <div className='add-new-line-category'>
                        {/* <div className="add-new-line" onClick={() => navigate("/product-category")}>
                          <p>Add New Line</p>
                        </div> */}
                        <Select
                          labelId="demo-select-small-label"
                          // value={products[0]?.id}
                          // label={products[0]?.name}
                          onChange={(e) => setSelectedProducts([...selectedProducts, e.target.value])}
                        style={{width:"90%", marginLeft:"5%"}}>
                          {products?.map(option =>
                            <MenuItem value={option.id}>{option.name}</MenuItem>
                          )}
                        </Select>

                        <div className='totalAmount' style={{ width: "100%", display: "inline-block" }}>
                          <div className="inner-tam" style={{ float: "right", paddingRight: "50px" }}>
                            <p>Subtotal: <span>{detail?.amount}</span></p>
                            <p>VAT: <span>0</span></p>
                            <p>Total: <span>{totalSum()}</span></p>

                            <Button onClick={handleSubmit}>Post</Button>
                          </div>
                        </div>
                      </div>
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

export default SalesDetail;
