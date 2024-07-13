
import React from 'react';

const HouseList = ({ houses, onEdit, onDelete }) => {
  return (
    <div>
      <h2>House List</h2>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            {house.name} - {house.address}
            <button onClick={() => onEdit(house)}>Edit</button>
            <button onClick={() => onDelete(house.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseList;
