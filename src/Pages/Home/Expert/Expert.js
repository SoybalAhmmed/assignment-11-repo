import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">A room without books is like a body without a soul.Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.</p>
                    <a href="#" className="btn btn-primary">Best Book</a>
                </div>
            </div>
        </div>

    );
};

export default Expert;