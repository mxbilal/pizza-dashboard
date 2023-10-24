
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Uncategorised from "../../assets/img/uncategorised.png";
// import { LAMT_API } from "../../api";
// import { showAlert } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";

const AddSuplierInvoice = () => {
  const navigate = useNavigate()

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
              onSubmit={""}
            >
              <Form>
                <div className="pocketExpense-form">
                  <div className="pef-inner">
                    <div className="pefi-area-main">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="description">Date of Invoice</label>
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
                          <label htmlFor="datetime">Due Date</label>
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
                          <label htmlFor="value">What is the default currency for this client? *</label>
                        </div>

                        <div className="fields">
                          <div className="inner-field">
                            <Field id="value" name="value" placeholder="£" />
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    <div className="pefi-area-main">
                      <div className="pefi-area">
                        <div className="labels">
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="fields">
                          <Field
                            id="description"
                            name="description"
                            style={{width:550, padding:30}}
                          />
                        </div>
                      </div>
                      <div className="pefi-area">
                        {/* <div className="labels">
                          <label htmlFor="datetime">Due Date</label>
                        </div> */}

                        <div className="fields">
                          <Field
                            id="attachments"
                            name="attachments"
                            placeholder="+ Attachments"
                            style={{width:550, marginTop:30, textAlign:"center", padding:30}}
                          />
                        </div>
                      </div>

                    </div>

                    <div className="vat-rate">
                      <p>Is this invoice a refund being issued to you by your Client?</p></div>
                    
                      <div className="vat-rate">
                      <p className="vr-para" style={{paddingTop:20, paddingBottom:20, borderBottom:"1px solid #D9D9D9CC"}}>Line Item</p>
                      </div>

                      <div className="vat-rate">
                      <p className="vr-para" style={{paddingTop:20, paddingBottom:30, borderBottom:"1px solid #D9D9D9CC", textAlign:"center"}}>+ Add new line item</p>
                      </div>
                      <div className="total-sales" style={{textAlign:'right'}}>
                        <p>Subtotal: <span style={{fontWeight:"bold"}}>£100.00</span></p>
                        <p>VAT: <span style={{fontWeight:"bold"}}>£100.00</span></p>
                        <p>Total:<span style={{fontWeight:"bold"}}>£120.00</span></p>
                      </div>
                    <div className="form-button">
                      <button type="submit" className="btn-save" >Save Invoice</button>
                      <button type="button" className="btn-delete">Delete Invoice</button>
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

export default AddSuplierInvoice;
