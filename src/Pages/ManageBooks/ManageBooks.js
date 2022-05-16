import React from 'react';
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
            <h2>Manage your services</h2>
            {
                services.map(book => <div key={book._id}>
                    <h5>{book.name} <button onClick={() => handleDelete(book._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageBooks;