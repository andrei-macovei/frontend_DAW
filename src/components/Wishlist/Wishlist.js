import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, incrementItem } from '../../store/WishlistStore';

function Wishlist() {
  const [itemName, setItem] = useState('');
  // sortare alfabetica
  const items = [...useSelector(state => state.items)].sort((a,b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });

  const dispatch = useDispatch();

  const handleSubmit = event => {
      event.preventDefault();
      dispatch(addItem(itemName))
      setItem('');
  };

  return (
    <div className="wrapper">
      <h2>Wishlist</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            Add on wishlist
          </p>
          <input type="text" onChange={e => setItem(e.target.value)} value={itemName} />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.name}>
            <h3>{item.name}</h3>
            <div>
              Count: {item.count}
              <button onClick={() => dispatch(incrementItem(item.name))}><span role="img" aria-label="add">+</span></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;