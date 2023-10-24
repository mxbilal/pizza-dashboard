import React, {useState, useEffect} from 'react'
import '../../index.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import SearchIcon from '../../assets/img/search-icon.png'
import SettingGaer from '../../assets/img/setting-gaer.png'
import { useNavigate } from 'react-router-dom'
import { LAMT_API } from "../../api";
import { showAlert } from "../../utils";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const UsersDetail = () => {
    const [clientList, setClientList] = useState([])
  const navigate = useNavigate()
    const GetClients = async () => {
        try {
          const response = await LAMT_API.endpoints.clientAdmin.clients.getAll()
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
      useEffect(() => {
        GetClients()
      }, [])
  return (
    <>
            <div className='main-area'>
                <div className="sidebar-area">
                    <Sidebar />
                </div>
                <div className="dashboardContainer">
                    <Navbar />
                    <div className="user-details-page">
                        <div className="ud-inner-section">
                            <div className="udi-area">
                                <div className="top-search">
                                    <input type="text" className="user-input" placeholder='Search'/>
                                    <img src={SearchIcon} alt="" />
                                </div>

                                <button className='btn-user-add' onClick={()=>navigate("/adduser")}> + Add User</button>
                            </div>

                            {/* <div className="user-table-details">
                                <div className="top-user-details">
                                    <div className="table-head">
                                        <p>Name</p>
                                        <p>Email</p>
                                        <p>Roles</p>
                                        <p>Date Added</p>
                                    </div>

                                    <div className="table-inner"  >
                                    
                                        
                                        {clientList.map(client => <ul>
                         

                          <li>{client?.first_name}</li>
                          <li>{client?.email}</li>
                          <li>{client?.current_role}</li>
                          <li>{client?.created_at}</li>
                        </ul>)}
                                    </div>

                                    
                                </div>
                            </div> */}
                           

                           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Roles</TableCell>
            <TableCell align="right">Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientList.map((client) => (
            <TableRow
              key={client?.id}
              
            >
              <TableCell component="th" scope="row">
              {client?.first_name}
              </TableCell>
              <TableCell align="right">{client?.email}</TableCell>
              <TableCell align="right">{client?.current_role}</TableCell>
              <TableCell align="right">{client?.created_at}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default UsersDetail