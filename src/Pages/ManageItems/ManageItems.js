import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './ManageItems.css';

const ManageItems = () => {
    const[manageItems,setManageItems] = useState([])

      useEffect( () =>{
          fetch('services.json')
          .then(res=> res.json())
          .then(data => setManageItems(data))
      },[])

    return (
        <div  className="services-container">
            
            {
                manageItems.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
        </div>
    );
};

export default ManageItems;