import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import './PlansTable.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const PlansTable = ({ data, features }) => {
  return (
    <TableContainer component={Paper} className='plan-table-main'>
      <Table>
        <TableHead>
          <TableRow className='plan-table-head'>
            <TableCell>
              <h3>Pricing Plans</h3>
              <p>*All prices exclude VAT</p>
            </TableCell>
            {data.map((plan) => (
              <TableCell key={plan.id}>
                <p>{plan.name}</p>
                <h3>{plan.amount}/{plan.interval}</h3>
                <p>{plan.slug}</p>
                <Button sx={{ color: '#635eff', background: 'white' }} >{plan.name}</Button>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {features.map((permission, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <TableCell>{permission}</TableCell>
              {data.map((item, idx) => (
                <TableCell key={idx}>{item.permissions[permission] !== undefined && item.permissions[permission] ? <CheckCircleIcon sx={{ color: 'green' }} /> : <CloseIcon color='disabled' />}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlansTable;
