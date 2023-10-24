import { LAMT_API } from '../../api'
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PlansTable from '../../components/PlansTable/PlansTable'
// const data = [
//   {
//     "id": 1,
//     "user_id": 1,
//     "name": "Standard Plan 02",
//     "slug": "standard plan 02",
//     "stripe_plan_id": "plan_OVhgxHhgPT1lb1",
//     "stripe_product_id": "prod_OVhgsh7aISEsZr",
//     "amount": 150.990000000000009094947017729282379150390625,
//     "self_assessment_price": "19.99",
//     "interval": "month",
//     "permissions": {
//       "expenses": true,
//       "invoicing": true,
//       "integrations": true,
//       "reporting": true,
//       "reminders": true,
//       "open_banking": false,
//       "chat_support": false,
//       "vat": true,
//       "tax_insights": true,
//       "multi_currency": false,
//       "tax_optimisation": false,
//       "tax_registrations": false,
//       "video_support": false,
//       "self_assessment": true
//     },
//     "description": "Access to standard features.",
//     "created_at": "2023-08-24T16:21:08.000000Z",
//     "updated_at": "2023-08-24T16:21:08.000000Z"
//   },
//   {
//     "id": 2,
//     "user_id": 1,
//     "name": "Standard Plan 03",
//     "slug": "standard plan 03",
//     "stripe_plan_id": "plan_OW0z0osAQTGZvE",
//     "stripe_product_id": "prod_OW0zf6lHORgv6G",
//     "amount": 250.990000000000009094947017729282379150390625,
//     "self_assessment_price": "29.99",
//     "interval": "month",
//     "permissions": {
//       "expenses": false,
//       "invoicing": true,
//       "integrations": true,
//       "reporting": true,
//       "reminders": true,
//       "open_banking": true,
//       "chat_support": false,
//       "vat": true,
//       "tax_insights": true,
//       "multi_currency": false,
//       "tax_optimisation": false,
//       "tax_registrations": false,
//       "video_support": false,
//       "self_assessment": true
//     },
//     "description": "Access to standard features.",
//     "created_at": "2023-08-25T12:17:26.000000Z",
//     "updated_at": "2023-08-25T12:17:26.000000Z"
//   }
// ]

const Plans = () => {
  const [features, setFeatures] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    LAMT_API.endpoints.clientAdmin.plans.getPlans().then(res => {
      let { data: { data } } = res
      setData(data)
      let permissions = [];

      data.forEach(item => {
        permissions = Object.keys(item.permissions);
      });

      permissions = [...new Set(permissions)];
      setFeatures(permissions)
    })
    
  }, [])
  return (
    <div>
      <PlansTable data={data} features={features} />
    </div>
  );
};

export default Plans;
