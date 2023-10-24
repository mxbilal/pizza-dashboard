import React, { useState,useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Uncategorised from "../../assets/img/uncategorised.png";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";

const PocketExpense = () => {
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
  const getDataById = async (id) => {
    const response = await LAMT_API.endpoints.clientAdmin.expense.getExpenseById(id)
    console.log("rr", response)
    if (response.status === 200) {
      showAlert.success(response?.data?.message)
      // navigate('/expenses')
    }
    else showAlert.failure(response?.data?.message)
  }

  useEffect(()=>{
    getDataById(id);
  },[])
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
                formData.append("value", values.value)
                formData.append("status", 1)
                formData.append("dated", values.datetime)
                formData.append("vat_rate", '0.2')

                let response = await LAMT_API.endpoints.clientAdmin.expense.addExpenses(formData)
                
                setLoading(false)
                if (response.status === 200) {
                  showAlert.success(response?.data?.message)
                  navigate('/expenses')
                }
                else showAlert.failure(response?.data?.message ?? "Failed!")
              }}
            >
              <Form>
                <div className="pocketExpense-form">
                  <div className="pef-inner">
                    <div className="pefi-area-main">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="description"
                            name="description"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="datetime">Date & Time</label>
                        </div>

                        <div className="fields">
                          <Field
                            id="datetime"
                            name="datetime"
                            placeholder="3rd April 2023 at 01:09"
                          />
                        </div>
                      </div>

                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="value">Value</label>
                        </div>

                        <div className="fields">
                          <div className="inner-field">
                            <p className="currency">£</p>
                            <Field id="value" name="value" placeholder="0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-center">
                      <div className="fc-inner-section">
                        <div className="fcis-start">
                          <div className="fcis-inner">
                            <div className="fcis-img">
                              <img src={Uncategorised} alt="uncategorised" />
                            </div>

                            <div className="fcis-text">
                              <p className="uncat-heading">
                                <b>Uncategorised</b> <br />
                                <span className="uncat-para">
                                  £0.00(£0.00 VAT)
                                </span>
                              </p>
                            </div>

                            <div className="fcis-expand">
                              <ExpandMoreIcon />
                            </div>
                          </div>

                          <div className="fcis-inner-2">
                            <div className="fcis-text">
                              <p className="uncat-heading-line">
                                + Add extra line item
                              </p>
                            </div>
                          </div>

                          <div className="fcis-inner">
                            <div className="fcis-text">
                              <p className="uncat-heading-line">
                                + Attachments
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vat-rate">
                      <p className="vr-para">VAT Rate</p></div>
                    <div role="group" aria-labelledby="my-radio-group" className="radio-row">
                      <label>
                        <Field type="radio" name="picked" value={'1'} />
                        Standard Rate
                      </label>
                      <label>
                        <Field type="radio" name="picked" value={'2'} />
                        Exempt
                      </label>

                      <label>
                        <Field type="radio" name="picked" value={'3'} />
                        Reduced Rate (12.5%)
                      </label>

                      <label>
                        <Field type="radio" name="picked" value={'4'} />
                        Reduced Rate
                      </label>

                      <label>
                        <Field type="radio" name="picked" value={'5'} />
                        No VAT (Outside Scope)
                      </label>
                    </div>

                    <div role="group" aria-labelledby="my-radio-group" className="radio-row-2">
                      <label>
                        <Field type="radio" name="picked" value={'6'} />
                        Reverse Charge (20%)
                      </label>
                      <label>
                        <Field type="radio" name="picked" value={'7'} />
                        Zero Rate
                      </label>

                    </div>

                    <div className="form-button">
                      <button type="submit" className="btn-save" disabled={loading}>Save Changes</button>
                      <button type="button" className="btn-delete" disabled={id === 0} onClick={handleDelete}>Delete Expense</button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default PocketExpense;
