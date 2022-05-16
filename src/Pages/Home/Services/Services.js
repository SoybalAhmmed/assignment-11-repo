import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
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
            services.slice(0,6).map(inventory => <Inventory
                key={inventory.id}
                inventory={inventory}
            >
            </Inventory>
            )
        }
        <button className='show-detail' onClick={showDetail}>Manage Inventories</button>
        </div>
        </div>
    </div>
    );
};

export default Services;