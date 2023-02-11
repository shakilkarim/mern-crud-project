import React from 'react';

const InputForm = (props) => {
    const{setProductName,setProductCode,setUnitPrice,setQuantity,setTotalPrice,handleSubmit,buttonType}=props
 
    

 

    return (
        <form className='w-1/3 mx-auto'>
        {props.children}
            <div class="form-control w-full max-w-xs">
            <label class="label">
            <span class="label-text">Product Name</span>
            </label>
            <input type="text" placeholder="Type here" 
           defaultValue={props?.product?.ProductName}
            onChange={e=> setProductName(e.target.value)}
            class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
            <label class="label">
            <span class="label-text">Product Code</span>
            </label>
            <input type="text" placeholder="Type here"
            defaultValue={props?.product?.ProductCode}
            onChange={e=> setProductCode(e.target.value)}
             class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
            <label class="label">
            <span class="label-text">Unit Price</span>
            </label>
            <input type="text" placeholder="Type here"
            defaultValue={props?.product?.UnitPrice}
            onChange={e=> setUnitPrice(e.target.value)}
             class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
            <label class="label">
            <span class="label-text">Quantity</span>
            </label>
            <input type="text" placeholder="Type here"
            defaultValue={props?.product?.Qty}
            onChange={e=> setQuantity(e.target.value)}
             class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
            <label class="label">
            <span class="label-text">Total Price</span>
            </label>
            <input type="text" placeholder="Type here"
            defaultValue={props?.product?.TotalPrice}
            onChange={e=> setTotalPrice(e.target.value)}
             class="input input-bordered w-full max-w-xs" />
            </div>
            <button className='btn btn-primary my-3' onClick={handleSubmit}>{buttonType}</button>

        </form>
    );
};

export default InputForm;