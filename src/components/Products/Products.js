import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/Products';
import Wishlist from '../Wishlist/Wishlist';

export default function Products() {
  const [list, setList] = useState([]);
  // console.log(getProducts);
  useEffect(() => {
    let mounted = true;
    getProducts()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className='wrapper'>
      <h2>Products</h2>
      <ul>
       {list.map(item => <li key={item.name}>{item.name}</li>)}
     </ul>
     <Wishlist />
    </div>
  );
}