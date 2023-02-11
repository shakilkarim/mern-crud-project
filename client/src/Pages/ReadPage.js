import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from '../Component/DataTable';

const ReadPage = () => {
    const [products,setProducts]=useState([]);
    const [loadings,setLoadings]=useState(false);
    useEffect(()=>{
        const URL='/readProduct'
        axios.get(URL)
        .then(data=>{
            setProducts(data.data.data)
            setLoadings(true)
        })
        .catch(err => console.error)
    },[])
    return (
        <div className='w-3/4 mx-auto mt-16'>
           {loadings ? <DataTable products={products}></DataTable>:<h1>loading</h1>}
        </div>
    );
};

export default ReadPage;