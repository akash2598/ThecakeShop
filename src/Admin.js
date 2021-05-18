import React from 'react';
import { MDBDataTable } from 'mdbreact'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Admin= () => {
 
  
  var[cakes,setCakes]=useState()
  var allcakeurl="https://apibyashu.herokuapp.com/api/allcakes"
  useEffect(()=>{
    axios({
  method:"get",
  url:allcakeurl
  }).then((response)=>{
  console.log("response from all cake api",response.data.data)
  setCakes(response.data.data)
  
    },(error)=>{
  console.log("Error from all cake api",error)
})
},[])
    
  

   
   
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Cake Id',
        field: 'cakeid',
        sort: 'asc',
        width: 200
      }
    ],
    rows: cakes
  };

  return (
    <div>
      This is admin Page
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    </div>
  );
}

export default Admin;