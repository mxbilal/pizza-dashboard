import React from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { TabView, TabPanel } from 'primereact/tabview';
import { Form, Field, Formik } from "formik";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";
import querystring from 'querystring'

const AddUser = () => {
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        let formdata = {
            ...values,
            // last_name: "venus",
            role: "vendor",
            // status: "1",
            // state: "Punjab",
            phone: "+1234567890",
            // default_currency: "USD",
            // vat_type: "standard_rate",
            // vat_rate: "20"
        }
        const data = querystring.stringify(formdata)
        let response = await LAMT_API.endpoints.clientAdmin.clients.add(data)
        console.log("ree", response, response.data, response.status)
        if (response.status === 200) {
            showAlert.success(response?.data?.message)
            navigate('/users')
        }
        else showAlert.failure(response?.data?.message ?? "Failed!")
    }
    return (
        <>
            <div className='main-area'>
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />
                    <div className='users-page'>
                   

                        <TabView>
                            <TabPanel header="User Details">
                          
                            
                                <div className="top-user-details">
                                <Formik
                            initialValues={{
                            }}
                            onSubmit={handleSubmit}
                        >
                                <Form>
                                    <div className="user-details-inner">
                                        <div className="udi-start">
                                            <label>Your Logo</label>
                                            <input type="file" className="userUploadImg" />
                                        </div>

                                        <div className="user-inner-details">
                                            <div className="uid-area">
                                                <div className="uid-section">
                                                    <label>Legal Name</label>
                                                    <Field
                                                        id="first_name"
                                                        name="first_name"
                                                        placeholder="Jack Jones"
                                                        style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                            backgroundColor: "rgba(217, 217, 217, 0.2509803922)",
                                                            outline: "none",
                                                            padding: "15px",
                                                            marginTop: "10px",
                                                            border: "none",
                                                        }}
                                                    />
                                                </div>

                                                <div className="uid-section">
                                                    <label>Email Address</label>
                                                    <Field
                                                        id="email"
                                                        name="email"
                                                        placeholder="jack@gmail.com"
                                                        style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                            backgroundColor: "rgba(217, 217, 217, 0.2509803922)",
                                                            outline: "none",
                                                            padding: "15px",
                                                            marginTop: "10px",
                                                            border: "none",
                                                        }}
                                                    />
                                                </div>

                                                <div className="uid-section">
                                                    <label>Street Address</label>
                                                    <Field
                                                        id="address" 
                                                        name="address" 
                                                        placeholder="Street Address"
                                                        style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                            backgroundColor: "rgba(217, 217, 217, 0.2509803922)",
                                                            outline: "none",
                                                            padding: "15px",
                                                            marginTop: "10px",
                                                            border: "none",
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="uid-area">
                                                <div className="uid-section">
                                                    <label>City Town</label>
                                                    <Field
                                                        id="city"
                                                        name="city"
                                                        placeholder="London"
                                                        style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                            backgroundColor: "rgba(217, 217, 217, 0.2509803922)",
                                                            outline: "none",
                                                            padding: "15px",
                                                            marginTop: "10px",
                                                            border: "none",
                                                        }}
                                                    />
                                                </div>

                                                <div className="uid-section">
                                                    <label>Post Code</label>
                                                    <Field
                                                        id="zip_code"
                                                        name="zip_code"
                                                        placeholder="54000"
                                                        style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                            backgroundColor: "rgba(217, 217, 217, 0.2509803922)",
                                                            outline: "none",
                                                            padding: "15px",
                                                            marginTop: "10px",
                                                            border: "none",
                                                        }}
                                                    />
                                                </div>

                                                <div className="uid-section">
                                                    <label>Country</label>
                                                    <Field
                                                       id="country" 
                                                       name="country" 
                                                       placeholder="United Kingdom"
                                                        style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                                            backgroundColor: "rgba(217, 217, 217, 0.2509803922)",
                                                            outline: "none",
                                                            padding: "15px",
                                                            marginTop: "10px",
                                                            border: "none",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-button">
                                        <button type='submit' className='btn-user-submit btn-save'>Submit</button>
                                        </div>
                                    </div>
                                    </Form>
                                    </Formik>
                                </div>
                                
                            </TabPanel>
                            {/* <TabPanel header="Permissions">
                              <Formik>
                              <Form>
                               <div className="user-permission">
                                    <div className="up-inner-section">
                                        <div className="upis-start">
                                            <p>Customers</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Expenses</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Estimates</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Invoices</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Payments</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Reports</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Staff Roles</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Settings</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Subscriptions</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                            <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <div className="upis-start">
                                            <p>Leads</p>
                                            <div role="group" aria-labelledby="my-radio-group" className="radio-rows">
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Own)
                                                </label>
                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    View (Global)
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Create
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Edit
                                                </label>

                                                <label className='user-permission-label'>
                                                    <Field type="radio" name="picked" />
                                                    Delete
                                                </label>

                                            </div>
                                        </div>

                                        <button type='submit' className='btn-user-submit'>Submit</button>
                                    </div>
                                </div>
                               </Form>
                              </Formik>
                            </TabPanel> */}

                        </TabView>
                        
                                
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AddUser