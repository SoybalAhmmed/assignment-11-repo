import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { inventoryId } = useParams();
    const [service, setService] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/book/${inventoryId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));

    }, [])

    return (
        <div>
            <h2>Welcome to detail: {service.name}</h2>
            <div className='text-center'>
            <img className='w-25' src={service.img} alt="" />
            <h2>{service.name}</h2>
            <p>Price: {service.price}</p>
            <p>quantity:{service.quantity}</p>
            <p>supplier :{service.supplier}</p>
            <p><small>{service.description}</small></p>
            <button className='btn btn-primary m-2'>Delivered</button>
                <Link to={`/checkout/${inventoryId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;