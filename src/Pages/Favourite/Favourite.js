import React from 'react';
import './Favourite.css';

const Favourite = () => {
    return (
        <div>
        <div className='home-area'>
            <div className='home-left'>
                <h1 className='h1'>Best Seller  Book</h1>
                
                <p>This beautifully illustrated book tells the heartwarming story of a little girl and a duckling, who both grow to understand what it means to care for each other as they learn that love is as much about letting go as it is about holding on</p>
            </div>
            <div className='home-right'>
                <img src='https://img.freepik.com/free-psd/realistic-book-cover-presentation_1310-24.jpg?t=st=1649063411~exp=1649064011~hmac=6eab1c3e093bb2093e8eec9bd56889db8b547d671c08716202dd2ed3c13da56d&w=740'></img>  
            </div>
        </div>
        </div>
    );
};

export default Favourite;