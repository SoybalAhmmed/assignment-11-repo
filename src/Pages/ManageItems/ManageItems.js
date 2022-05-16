import React, { useEffect, useState } from 'react';
import Inventory from '../Home/Inventory/Inventory';
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
                manageItems.map(inventory => <Inventory
                    key={inventory.id}
                    inventory={inventory}
                >
                </Inventory>)
            }
        </div>
    );
};

export default ManageItems;