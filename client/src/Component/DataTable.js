import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteAlert } from './SweetAlert';

const DataTable = ({products}) => {
  
  const navigate=useNavigate()
    return (
        <div class="overflow-x-auto ">
  <table class="table  w-full ">
    <thead className=''>
      <tr className='text-center'>
        <th></th> 
        <th>PRODUCT</th> 
        <th>UNIT PRICE</th> 
        <th>QTY</th> 
        <th>TOTAL PRICE</th> 
        <th>ACTION</th>
      </tr>
    </thead> 
    <tbody>
      {
       
        products.map((product, index) =>{
            return(
            <tr className='text-center'>
                <td>{index+1}</td>
                <td>{product.ProductName}</td>
                <td>{product.UnitPrice}</td>
                <td>{product.Qty}</td>
                <td>{product.TotalPrice}</td>
                <td className=''>
                    <button onClick={()=>deleteAlert(product._id)} className='btn btn-danger py-1 mr-2'>delete</button>
                    <button onClick={()=>navigate(`/update/${product._id}`)} className='btn btn-secondary py-1'>edit</button>
                </td>
            </tr>)
        })
      }
      
    </tbody> 
    {products.length>20 && <tfoot>
      <tr>
      <th></th> 
        <th>PRODUCT</th> 
        <th>UNIT PRICE</th> 
        <th>QTY</th> 
        <th>TOTAL PRICE</th> 
        <th>ACTION</th>
      </tr>
    </tfoot>}
  </table>
</div>
    );
};

export default DataTable;