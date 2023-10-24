
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";


const UpdateDeleteClient = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    console.log('id',id)
    const getClient = async () => {
        try {
          const response = await LAMT_API.endpoints.clientAdmin.clients.getClientById(id)
          if (response.status === 200) {
            let data = response?.data?.data;
            console.log('data',response?.data?.data)

            setDetail(data)
          }
          else showAlert.failure(response?.data?.message ?? "Failed!")
        }
        catch (e) {
          console.log(e)
        }
      }
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
            vat_rate: "20"
        }
        let response = await LAMT_API.endpoints.clientAdmin.clients.update(formdata,id)
        console.log("ree", response, response.data, response.status)
        if (response.status === 200) {
            showAlert.success(response?.data?.message)
            navigate('/add-client-sales')
        }
        else showAlert.failure(response?.data?.message ?? "Failed!")
    }
      const handleDelete = async () => {
        const response = await LAMT_API.endpoints.clientAdmin.clients.del(id);
        if (response.status === 200) {
          showAlert.success(response?.data?.message)
          navigate('/sales')
        }
        else showAlert.failure(response?.data?.message)
      }

      useEffect(()=>{
        getClient()
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
                       {detail &&  <Formik
                            initialValues={{
                                first_name:detail?.first_name ,
                                email:detail?.email,
                                
                            }}
                            onSubmit={handleSubmit}
                        >
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
                                                        defaultValue={detail?.first_name}
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
                                                        defaultValue={detail?.email}
                                                    />
                                                </div>
                                            </div>

                                            <div className="pefi-area">
                                                <div className="labels">
                                                    <label htmlFor="address">Street Address</label>
                                                </div>

                                                <div className="fields">
                                                    <div className="inner-field">
                                                        <Field id="address" name="address" placeholder="Street Address" defaultValue={detail?.info?.address}/>
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
                                                    <Field
                                                        id="city"
                                                        name="city"
                                                        placeholder="London"
                                                        defaultValue={detail?.info?.city}
                                                    />
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
                                                        defaultValue={detail?.info?.zip_code}
                                                    />
                                                </div>
                                            </div>

                                            <div className="pefi-area">
                                                <div className="labels">
                                                    <label htmlFor="country">Country</label>
                                                </div>

                                                <div className="fields">
                                                    <div className="inner-field">
                                                        <Field id="country" name="country" placeholder="United Kingdom" defaultValue={detail?.info?.country}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="pefi-area-main-2">
                                            <div className="pefi-area">
                                                <div className="labels">
                                                    <label htmlFor="payment_deadline">How many days do you normally give this client to pay?</label>
                                                </div>
                                                <div className="fields">
                                                    <Field id='payment_deadline' as="select" name="payment_deadline" className="numberOfDays">
                                                        <option value="10">10</option>
                                                        <option value="20">20</option>
                                                        <option value="30">30</option>
                                                    </Field>
                                                </div>
                                            </div>


                                            <div className="pefi-area">
                                                <div className="labels">
                                                    <label htmlFor="value">What is the default currency of this client?</label>
                                                </div>

                                                <div className="fields">
                                                    <Field as="select" name="currency_symbol" className="currencyForClient">
                                                        <option value="1">&pound;</option>
                                                        <option value="2">$</option>
                                                        <option value="3">&euro;</option>
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-button">
                                            <button type="submit" className="btn-save" >Update Client</button>
                                            <button onClick={()=>handleDelete()} type="submit" className="btn-save" style={{marginLeft:"10px"}}>Delete Client</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateDeleteClient;
