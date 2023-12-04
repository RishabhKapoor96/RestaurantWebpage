// src/services/api.js
const API_ENDPOINT = 'http://localhost:3001/restaurant';

const fetchRestaurants = async () => {
  try {
    let response = await fetch(API_ENDPOINT);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export { fetchRestaurants };



// // import React from 'react';
// const API_ENDPOINT = 'http://localhost:3001/restaurant';

// const fetchRestaurants = async () => {
//   try {
//     let response = await fetch(API_ENDPOINT);
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching restaurants:', error);
//     throw error;
//   }
// };

// export { fetchRestaurants };
