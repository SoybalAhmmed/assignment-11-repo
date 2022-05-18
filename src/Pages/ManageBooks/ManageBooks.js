import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../hooks/UseBooks';

const ManageBooks = () => {
    const [services, setServices] = useBooks();

    

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/book/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(book => book._id !== id);
                setServices(remaining);
            })
        }
    }
    
    return (
        <div className='w-50 mx-auto'>
            <Link to="/addbook">
                    <button className='btn btn-primary'>Add new item</button>
                </Link>
            <h2>Manage your books</h2>
            <div className=''>
            {
                services.map(book => <div key={book._id}>
                    <div className='d-flex  border-bottom p-2 justify-content-between '>
                    <div>
                       
                        <p className='bg-primary text-white'>{book.name}</p>
                        
                       
                      
                       <p>Price: {book.price}</p>
              <p>quantity:{book.quantity}</p>
            <p>supplier name:{book.supplier}</p>
            <p><small>{book.description}</small></p>
                       </div>
                       <div><button onClick={() => handleDelete(book._id)}>X</button></div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default ManageBooks;