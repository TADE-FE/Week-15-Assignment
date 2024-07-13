
import React, { useState, useEffect } from 'react';

const HouseForm = ({ currentHouse, onSave }) => {
  const [house, setHouse] = useState({ name: '', address: '' });

  useEffect(() => {
    if (currentHouse) {
      setHouse(currentHouse);
    }
  }, [currentHouse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouse((prevHouse) => ({ ...prevHouse, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(house);
    setHouse({ name: '', address: '' });
  };

  return (
    <div>
      <h2>{currentHouse ? 'Edit House' : 'Add House'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={house.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={house.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{currentHouse ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default HouseForm;
