import React, { useState, useEffect } from 'react'

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";
import VehicleExpense from "../../assets/img/vehicle-expense.png";
import { useNavigate, useParams} from 'react-router-dom';


const ProductCategory = ({props}) => {
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const GetProducts = async () => {
        try {
          const response = await LAMT_API.endpoints.clientAdmin.products.getAll()
          if (response.status === 200) {
            let data = response?.data?.data
            setProductList(data)
          }
          else showAlert.failure(response?.data?.message ?? "Failed!")
        }
        catch (e) {
          console.log(e)
        }
      }

      useEffect(() => {
        GetProducts()
      }, [])
      const handleNavigation = (pr) => {
        // Retrieve the existing array from local storage
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      
        // Check if the product is already in the array
        const existingProduct = storedProducts.find((storedPr) => storedPr.id === pr.id);
      
        // If it's not in the array, add it
        if (!existingProduct) {
          storedProducts.push(pr);
      
          // Save the updated array to local storage
          localStorage.setItem('products', JSON.stringify(storedProducts));

        }
        navigate(`/sales/${id}`, { state: pr });

        // Navigate to the product page
      };
    return (
        <>
          <div className="main-area">
            <div className="sidebar-area">
              <Sidebar />
            </div>
            <div className="dashboardContainer">
              <Navbar />
             <div className="product-categroy" style={{background:"white", margin: "3% 30% 0% 3%", borderRadius:"16px", padding:"10px"}}>
             {productList.map(pr => <div      onClick={() => handleNavigation(pr)}
 className="esi-content" style={{display:"flex", alignItems:"center", padding:"10px 0px", cursor:"pointer"}}>
                          <img src={VehicleExpense}  alt="vehicle-expense" style={{width:"75px"}}/>
                          <div className="esic-inner">
                            <p className="esic-heading">{pr?.name ?? ""}<br /><span className="esich-para">&pound;{pr?.price ?? 0}</span></p>
                          </div>
                        </div>)}
             </div>
            </div>
          </div>
        </>
      );
}

export default ProductCategory