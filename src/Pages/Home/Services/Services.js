import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/book')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    const navigate = useNavigate()
    const showDetail =() =>{
          navigate('/manageitems')
    }

    return (
        <div id="services" className='container'>
        <div className="row">
        <h1 className='text-primary text-center mt-5'> Our Services</h1>
        <div className="services-container">
        {
            services.map(inventory => <Inventory
                key={inventory._id}
                inventory={inventory}
            >
            </Inventory>
            )
        }
        
        </div>
        <button className='show-detail w-25' onClick={showDetail}>Manage Inventories</button>
        </div>
    </div>
    );
};

export default Services;