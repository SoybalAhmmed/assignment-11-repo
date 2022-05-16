import { useEffect, useState } from "react";

const useBooks = () =>{
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/book')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return [services, setServices]
}

export default useBooks;