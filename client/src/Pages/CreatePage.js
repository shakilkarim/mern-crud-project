import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputForm from '../Component/InputForm';


const CreatePage = () => {
    const[productName,setProductName]=useState('');
    const[productCode,setProductCode]=useState('');
    const[unitPrice,setUnitPrice]=useState('');
    const[quantity,setQuantity]=useState('');
    const[totalprice,setTotalPrice]=useState('');
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            if(productName==='' || productCode==='' || unitPrice==='' || quantity==='' || totalprice==="")
        {toast.warning('please fill up all empty box')}
        else{
           const productData={
            ProductName:productName,
            ProductCode:productCode,
            UnitPrice:unitPrice,
            Qty:quantity,
            TotalPrice:totalprice
           }
           const {data}=await axios.post('/createProduct',productData)
           if(data.status==='success'){
            toast.success("successfully created");
            navigate('/')
            
           }
        }
        } catch (error) {
            
        }

        
    }
    return (
        <div className='w-full'>
            <InputForm
            setProductName={setProductName}
            setProductCode={setProductCode}
            setUnitPrice={setUnitPrice}
            setQuantity={setQuantity}
            setTotalPrice={setTotalPrice}
            buttonType='Create'
            handleSubmit={handleSubmit}
            >
                <h1 className='text-3xl py-4'>Create Products</h1>
            </InputForm>
        </div>
    );
};

export default CreatePage;