import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import PokcetExpense from "../../assets/img/pocket-expense.png";
import Invoice from "../../assets/img/invoice.png";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";

const ProfitLoss = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const { id } = useParams();
  // Function to fetch sales data by ID
  const getReportData = async () => {
    try {
      const response =
        await LAMT_API.endpoints.clientAdmin.reports.profitAndLoss.getProfitLoss();
      if (response.status === 200) {
        let data = response?.data?.data;
        setDetail(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };
  const getDataByInterval = async () => {
    try {
      const response =
        await LAMT_API.endpoints.clientAdmin.reports.profitAndLoss.getProfitLossByInterval(
          startDate,
          endDate
        );
      if (response.status === 200) {
        let data = response?.data?.data;
        setDetail(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };
  const getDataByThisMonth = async () => {
    try {
      const response =
        await LAMT_API.endpoints.clientAdmin.reports.profitAndLoss.getDataByThisMonth();
      if (response.status === 200) {
        let data = response?.data?.data;
        setDetail(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };
  const getDataByLastMonth = async () => {
    try {
      const response =
        await LAMT_API.endpoints.clientAdmin.reports.profitAndLoss.getDataByLastMonth();
      if (response.status === 200) {
        let data = response?.data?.data;
        setDetail(data);
      } else {
        showAlert.failure(response?.data?.message ?? "Failed!");
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const handleDelete = async () => {
    const response = await LAMT_API.endpoints.clientAdmin.sales.deleteSalesById(
      id
    );
    if (response.status === 200) {
      showAlert.success(response?.data?.message);
      navigate("/sales");
    } else showAlert.failure(response?.data?.message);
  };
  // Fetch sales data when the component mounts
  useEffect(() => {
    getReportData();
  }, []);
  useEffect(() => {
    if (startDate && endDate) {
      getDataByInterval();
    }
  }, [endDate]);
  const onTabChange = (key) => {
    setActiveTabIndex(key?.index);
    if (key.index == 1) {
      getDataByThisMonth();
    } else if (key.index == 2) {
      getDataByLastMonth();
    } else {
      getReportData();
    }
  };
  return (
    <>
      <div className="main-area">
        <div className="sidebar-area">
          <Sidebar />
        </div>
        <div className="dashboardContainer">
          <Navbar />
          <div className="purchases-section">
            <div className="purchases-area">
              <div className="purchases-inner">
                <TabView
                  activeIndex={activeTabIndex}
                  onTabChange={(key) => onTabChange(key)}
                >
                  <TabPanel header="This Financial Year">
                    <div className="top-dates">
                      <div
                        className="top-date-section"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "0% 50% 0% 0%",
                        }}
                      >
                        <input
                          type="date"
                          onChange={(e) => {
                            setStartDate(e?.target.value);
                          }}
                          value={startDate}
                          style={{ width: "100%", border: "1px solid #80808042", padding: "10px", borderRadius: "10px", backgroundColor: "aliceblue", outline:"none" }}
                        />
                        <p style={{ padding: "0px 10px" }}>-</p>
                        <input
                          type="date"
                          onChange={(e) => {
                            setEndDate(e?.target.value);
                          }}
                          value={endDate}
                          style={{ width: "100%", border: "1px solid #80808042", padding: "10px", borderRadius: "10px", backgroundColor: "aliceblue", outline:"none" }}
                        />
                      </div>
                      <div className="esi-content" key={detail?.id} style={{margin:"10px", display:"inline"}}>
                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Revenue: </p>
                        <p>£ {detail?.totalRevenue}</p>
                        </div>
                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>
                          Total Sale Invoice VAT: </p>
                          <p>£ {detail?.totalSaleInvoiceVat}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>
                        Total Expenses: </p>
                          <p>£ {detail?.totalExpenses}</p>
                        </div>

                        
                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>
                        Total Expenses VAT: </p>
                          <p>£ {detail?.totalExpensesVat}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>
                        Profit or Loss: </p>
                          <p>£ {detail?.profitOrLoss}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>
                        Purchases: </p>
                          <p>£ {detail?.purchases}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>
                        Purchases VAT: </p>
                          <p>£ {detail?.purchasesVat}</p>
                        </div>
                     
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="This Month">
                    <div className="esi-content" key={detail?.id} style={{margin:"10px", display:"inline"}}>

                      <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Revenue: </p>
                        <p>£ {detail?.totalRevenue}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Sale Invoice VAT: </p>
                        <p> £ {detail?.totalSaleInvoiceVat}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Expenses: </p>
                        <p> £ {detail?.totalExpenses}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Expenses VAT: </p>
                        <p> £ {detail?.totalExpensesVat}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Profit or Loss: </p>
                        <p> £ {detail?.profitOrLoss}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Purchases: </p>
                        <p> £ {detail?.purchases}</p>
                        </div>
                    
                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Purchases VAT: </p>
                        <p> £ {detail?.purchasesVat}</p>
                        </div>
              
                    </div>
                  </TabPanel>

                  <TabPanel header="Last Month">
                    <div className="esi-content" key={detail?.id} style={{margin:"10px", display:"inline"}}>
                   
                      <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Revenue: </p>
                        <p> £ {detail?.totalRevenue}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Sale Invoice VAT: </p>
                        <p> £ {detail?.totalSaleInvoiceVat}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Expenses: </p>
                        <p> £ {detail?.totalExpenses}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Total Expenses VAT: </p>
                        <p> £ {detail?.totalExpensesVat}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Profit or Loss: </p>
                        <p> £ {detail?.profitOrLoss}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Purchases: </p>
                        <p> £ {detail?.purchases}</p>
                        </div>

                        <div className="top-pl" style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Purchases VAT: </p>
                        <p> £ {detail?.purchasesVat}</p>
                        </div>
                    </div>
                    {/* </div>{" "} */}
                  </TabPanel>
                </TabView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfitLoss;
