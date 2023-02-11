import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputForm from '../Component/InputForm';

const UpdatePage = () => {
    const[productName,setProductName]=useState('');
    const[productCode,setProductCode]=useState('');
    const[unitPrice,setUnitPrice]=useState('');
    const[quantity,setQuantity]=useState('');
    const[totalprice,setTotalPrice]=useState('');
    const {id}=useParams();
    const [product,setProduct]=useState({});
    const navigate=useNavigate()
    useEffect(()=>{
        const URL=`/product/${id}`
        axios.get(URL).then(data =>{
            setProduct(data.data.data)
        })
    },[])

    // update post
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const productData={
                ProductName:productName || product.ProductName,
                ProductCode:productCode || product.ProductCode,
                UnitPrice:unitPrice || product.UnitPrice,
                Qty:quantity || product.Qty,
                TotalPrice:totalprice || product.TotalPrice
               }
               console.log(productData)
               const{data}= await axios.post(`/updateProduct/${id}`,productData);
               console.log(data)
               if(data.status==='success'){
                toast.success("successfully updated product");
                navigate('/')
                
               }
        } catch (error) {
            
        }
    }
    return (
        <div>
           
           <InputForm
            setProductName={setProductName}
            setProductCode={setProductCode}
            setUnitPrice={setUnitPrice}
            setQuantity={setQuantity}
            setTotalPrice={setTotalPrice}
            handleSubmit={handleSubmit}
           product={product}
           buttonType='Update'
           >
             <h1 className='text-3xl py-4'>Update Products</h1>
           </InputForm>
        </div>
    );
};

export default UpdatePage;