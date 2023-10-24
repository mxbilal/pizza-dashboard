import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Uncategorised from "../../assets/img/uncategorised.png";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const handleDelete = async () => {
    const response = await LAMT_API.endpoints.clientAdmin.expense.deleteExpense(id)
    console.log("rr", response)
    if (response.status === 200) {
      showAlert.success(response?.data?.message)
      navigate('/expenses')
    }
    else showAlert.failure(response?.data?.message)
  }
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />

          <div>
            <Formik
              initialValues={{
              }}
              onSubmit={async (values) => {
                setLoading(true)
                var formData = new FormData()
                formData.append("name", values.description)
                formData.append("price", values.value)
                formData.append("status", 1)
                formData.append("unit", values.unit)
                formData.append("vat_type", 'standard_rate')
                formData.append("vat_rate", values.rate)
                formData.append("type", values.picked)

                let response = await LAMT_API.endpoints.clientAdmin.products.add(formData)

                setLoading(false)
                if (response.status === 200) {
                  showAlert.success(response?.data?.message)
                  navigate('/sales')
                }
                else showAlert.failure(response?.data?.message ?? "Failed!")
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
                      {/* <label>
                        <Field type="radio" name="unit" value={'unit'} />
                        Unit
                      </label> */}
                      <label>
                        <Field type="radio" name="unit" value={'hours'} />
                        Hours
                      </label>

                      <label>
                        <Field type="radio" name="unit" value={'days'} />
                        Days
                      </label>

                      <label>
                        <Field type="radio" name="unit" value={'months'} />
                        Months
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
                      <button type="submit" className="btn-save" disabled={loading}>Add Product</button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct