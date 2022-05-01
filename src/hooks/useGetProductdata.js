import { useEffect, useState } from 'react';

const useGetProductdata = () => {
    const [products, setproducts] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/all')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    //console.log(products);
    return [products, setproducts];
};

export default useGetProductdata;