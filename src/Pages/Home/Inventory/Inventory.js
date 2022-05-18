import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({inventory}) => {
    const {_id,name, img, description, price,quantity,supplier} = inventory;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/inventory/${id}`);
    }
    
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>quantity:{quantity}</p>
            <p>supplier name:{supplier}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Manage</button>
        </div>
    );
};

export default Inventory;