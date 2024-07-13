// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HouseList from './components/HouseList';
import HouseForm from './components/HouseForm';

const API_URL = 'https://mockapi.io/projects/6692ba15346eeafcf46e0101'; 

const App = () => {
  const [houses, setHouses] = useState([]);
  const [currentHouse, setCurrentHouse] = useState(null);

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await axios.get(API_URL);
      setHouses(response.data);
    } catch (error) {
      console.error('Error fetching houses:', error);
    }
  };

  const createHouse = async (house) => {
    try {
      const response = await axios.post(API_URL, house);
      setHouses([...houses, response.data]);
    } catch (error) {
      console.error('Error creating house:', error);
    }
  };

  const updateHouse = async (house) => {
    try {
      const response = await axios.put(`${API_URL}/${house.id}`, house);
      setHouses(houses.map((h) => (h.id === house.id ? response.data : h)));
    } catch (error) {
      console.error('Error updating house:', error);
    }
  };

  const deleteHouse = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setHouses(houses.filter((house) => house.id !== id));
    } catch (error) {
      console.error('Error deleting house:', error);
    }
  };

  return (
    <div>
      <HouseForm
        currentHouse={currentHouse}
        onSave={(house) => {
          currentHouse ? updateHouse(house) : createHouse(house);
          setCurrentHouse(null);
        }}
      />
      <HouseList
        houses={houses}
        onEdit={(house) => setCurrentHouse(house)}
        onDelete={(id) => deleteHouse(id)}
      />
    </div>
  );
};

export default App;
