import React, { useState ,useEffect} from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";


const UpdateDeleteProduct = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  // Function to fetch sales data by ID
  const getProductById = async (id) => {
    try {
      const response = await LAMT_API.endpoints.clientAdmin.products.getProductById(id);
      console.log('response',response)
      if (response.status == 200 ) {
        let data = response?.data?.data;
        console.log('data',data)
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
      navigate('/sales')
    }
    else showAlert.failure(response?.data?.message)
  }
  // Fetch sales data when the component mounts
  useEffect(() => {
    getProductById(id);
  }, []);

  console.log('data',detail)
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />

          <div>
          {detail &&  <Formik
              initialValues={{
                description:detail?.name,
                email:detail?.email,
                value:detail?.price,
                unit:detail?.unit
              }}
              
            >
              <Form>
                <div className="pocketExpense-form">
                  <div className="pef-inner">
                    <div className="pefi-area-main-2">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="description">What is the name of your product?</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="description"
                            name="description"
                            placeholder="Product name"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>

                      <div className="pefi-area" style={{ marginLeft: "50px" }}>
                        <div className="labels">
                          <label htmlFor="value">What price do you charge per unit?</label>
                        </div>

                        <div className="fields">
                          <div className="inner-field">
                            <p className="currency">£</p>
                            <Field id="value" name="value" placeholder="0" style={{ width: "100%" }} />
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="vat-rate">
                      <p className="vr-para">What unit best represents this product?</p></div>
                    <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                     
                      <label>
                        {detail?.unit}
                      </label>

                    </div>

                    <div className="vat-rate">
                      <p className="vr-para">Is this a product or a service</p></div>
                    <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                      <label>
                        <Field type="radio" name="picked" value={'product'} />
                        Product
                      </label>
                      <label>
                        <Field type="radio" name="picked" value={'service'} />
                        Service
                      </label>

                    </div>


                    <div className="vat-rate">
                      <p className="vr-para">VAT Rate</p></div>
                    <div role="group" aria-labelledby="my-radio-group" className="radio-row">
                      <div className="radio-row-up">
                        <label>
                          <Field type="radio" name="rate" value={'0'} />
                          EC Goods (Zero Rated)
                        </label>
                        <label>
                          <Field type="radio" name="rate" value={'0'} />
                          Exempt
                        </label>

                        <label>
                          <Field type="radio" name="rate" value={'0'} />
                          No VAT (Outside Scope)
                        </label>

                        <label>
                          <Field type="radio" name="rate" value={'0'} />
                          Reduced Rate
                        </label>

                        <label>
                          <Field type="radio" name="rate" value={'0'} />
                          Reduced Rate (12.5)
                        </label>

                      </div>
                      <div className="radio-row-down">
                        <label>
                          <Field type="radio" name="rate" value={'0'} />
                          Custom Rate
                        </label>
                        <label>
                          <Field type="radio" name="rate" value={'0'} />
                          Zero Rate
                        </label>
                      </div>
                    </div>

                    <div className="form-button">
                      <button type="submit" className="btn-save">Update Product</button>
                      <button onClick={()=>handleDelete()} type="submit" className="btn-save" style={{marginLeft:"10px"}}>Delete Product</button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>}
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateDeleteProduct