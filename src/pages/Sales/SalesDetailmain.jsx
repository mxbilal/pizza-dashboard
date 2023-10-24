import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { Button, MenuItem, Select } from '@mui/material';

const SalesDetailMain = () => {
  let sum = 0
  const [detail, setDetail] = useState(null);
  const [clientList, setClientList] = useState(null)
  const [products, setProducts] = useState(null)
  const [data, setData] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState([])
  const navigate = useNavigate()

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
        setClientList(data)
      }
      else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async () => {
    const response = await LAMT_API.endpoints.clientAdmin.sales.deleteSalesById(id)
    if (response.status === 200) {
      showAlert.success(response?.data?.message)
      navigate('/sales')
    }
    else showAlert.failure(response?.data?.message)
  }
  const totalSum = () => {
    sum = 0;
    products?.map?.(product => {
      if (selectedProducts?.includes?.(product?.id)) {
        sum = parseInt(sum) + parseInt(product.price)
      }
    })
    console.log("sum here", sum)
    // setTotal(sum)
    return sum
  }
  const handleUpdate = async () => {
    console.log(23)
    const formData = {
      // name: 'Invoices for5Client 41' + Math.random(10)
      name: 'Invoices for5Client 41' + Math.random(10),
      invoice_for_user_id: id,
      type: "Invoice",
      issue_date: "2023-11-15",
      due_date: "2023-11-30",
      dated: "2023-11-22",
      status: "Pending",
      vat_rate: "200",
      vat_type: "zero_rate",
      current_role: "client",
      category_list_items: [],
      product_or_services: `[${selectedProducts}]`,
      amount: sum
    }

    LAMT_API.endpoints.clientAdmin.sales.updateSales(formData, id).then(res => {
      console.log("res after adding invoic", res);
      if (res.status === 200) {
        navigate('/sales')
      } else {
        alert("Opps!! Something bad has happened.")
      }
    })
  }
  // Fetch sales data when the component mounts
  useEffect(() => {
    getSalesById(id);
    getProducts()
    GetClients()
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

                <div className="sales-invoice" >
                  <div className="inner-sale-invoice">
                    <div className="start-invoice">
                      <div className="top-heading-invoice">
                        <h5 style={{ padding: "10px" }}>Add Invoice</h5>
                      </div>
                      <div className="right-info" key={detail?.id} style={{ width: "100%", display: "inline-block" }}>
                        <div className="ri-area" style={{ float: "right", paddingRight: "50px" }}>
                          <h2>{detail?.name}</h2>
                          <p>{detail?.amount}</p>

                        </div>

                      </div>

                      <div className="left-info" key={clientList?.id} style={{ paddingLeft: "50px" }}>
                        <h2>{clientList?.first_name}</h2>
                        <p>{clientList?.email}</p>
                      </div>

                      <div className="addSelectedItems">
                        <h4 style={{ paddingLeft: "6%" }}>Items</h4>
                        {
                          products?.map?.(product => {
                            return (
                              selectedProducts?.includes(product?.id) ?
                                <div className='innerSelectedItem' style={{ display: "flex", justifyContent: "space-between", margin: "auto 6%" }}>
                                  <p>{product?.name}</p>
                                  <p>{product?.price}</p>
                                </div> : ''
                            )
                          })
                        }
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
                        >
                          {products?.map(option =>
                            <MenuItem value={option.id}>{option.name}</MenuItem>
                          )}
                        </Select>

                        <div className='totalAmount' style={{ width: "100%", display: "inline-block" }}>
                          <div className="inner-tam" style={{ float: "right", paddingRight: "50px" }}>
                            <p>Subtotal: <span>{detail?.amount}</span></p>
                            <p>VAT: <span>0</span></p>
                            <p>Total: <span>{totalSum()}</span></p>

                            <Button onClick={() => { handleDelete() }}>delete</Button>
                            <Button onClick={handleUpdate}>update</Button>

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

export default SalesDetailMain;
