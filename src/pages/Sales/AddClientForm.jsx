import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Uncategorised from "../../assets/img/uncategorised.png";
import querystring from "querystring";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "@mui/material";

const AddClientForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    let formdata = {
      ...values,
      last_name: "venus",
      role: "client",
      status: "1",
      state: "Punjab",
      phone: "+1234567890",
      default_currency: "USD",
      vat_type: "standard_rate",
      vat_rate: "20",
    };
    const data = querystring.stringify(formdata);
    let response = await LAMT_API.endpoints.clientAdmin.clients.add(data);
    console.log("ree", response, response.data, response.status);
    if (response.status === 200) {
      showAlert.success(response?.data?.message);
      navigate("/add-client-sales");
    } else showAlert.failure(response?.data?.message ?? "Failed!");
  };
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />

          <div>
            <Formik initialValues={{}} onSubmit={handleSubmit}>
              <Form>
                <div className="pocketExpense-form">
                  <div className="pef-inner">
                    <div className="pefi-area-main">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="first_name">Legal Name</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="first_name"
                            name="first_name"
                            placeholder="Jack Jones"
                          />
                        </div>
                      </div>
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="email">Email Address</label>
                        </div>

                        <div className="fields">
                          <Field
                            id="email"
                            name="email"
                            placeholder="jack@gmail.com"
                          />
                        </div>
                      </div>

                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="address">Street Address</label>
                        </div>

                        <div className="fields">
                          <div className="inner-field">
                            <Field
                              id="address"
                              name="address"
                              placeholder="Street Address"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pefi-area-main">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="city">City/Town</label>
                        </div>
                        <div className="fields">
                          <Field id="city" name="city" placeholder="London" />
                        </div>
                      </div>
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="zip_code">Postal Code</label>
                        </div>

                        <div className="fields">
                          <Field
                            id="zip_code"
                            name="zip_code"
                            placeholder="54000"
                          />
                        </div>
                      </div>

                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="country">Country</label>
                        </div>

                        <div className="fields">
                          <div className="inner-field">
                            <Field
                              id="country"
                              name="country"
                              placeholder="United Kingdom"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pefi-area-main-2">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="payment_deadline">
                            How many days do you normally give this client to
                            pay?
                          </label>
                        </div>
                        <div className="fields">
                          <Field
                            id="payment_deadline"
                            as="select"
                            name="payment_deadline"
                            className="numberOfDays"
                          >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                          </Field>
                        </div>
                      </div>

                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="value">
                            What is the default currency of this client?
                          </label>
                        </div>

                        <div className="fields">
                          <Field
                            as="select"
                            name="currency_symbol"
                            className="currencyForClient"
                          >
                            <option value="1">&pound;</option>
                            <option value="2">$</option>
                            <option value="3">&euro;</option>
                          </Field>
                        </div>
                      </div>
                    </div>

                    <div className="form-button">
                      <button type="submit" className="btn-save">
                        Add Client
                      </button>
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

export default AddClientForm;
