import { useEffect, useState } from 'react';

const useSingleItem = (id) => {

    const [item, setitem]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/item/${id}`)
        .then(res=>res.json())
        .then(data=>setitem(data))

    },[id])

    return [item, setitem];

};


export default useSingleItem;