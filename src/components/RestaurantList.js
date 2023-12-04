import React, { useState, useEffect } from 'react';
import { fetchRestaurants } from '../services/api';
import './RestaurantList.css'; 
import defaultImage from '../images/download.jpeg';

const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    // Fetch data from your backend API
    fetchRestaurants()
      .then(data => setRestaurant(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="restaurant-card">
       <img src={defaultImage} className="card-image" />
      {restaurant ? (
        <>
          <h1>{restaurant.name}</h1>
          <p>Location: {restaurant.location.address}</p>
          <p>Chef: {restaurant.chef.name}</p>
          <h2>Awards</h2>
          <ul>
            {restaurant.awards.map((award, index) => (
              <li key={index}>
                {award.year} - {award.organization}: {award.award}
              </li>
            ))}
          </ul>
          <h2>Reviews</h2>
          <ul>
            {restaurant.reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.customer_name}</strong> - {review.rating}/5: "{review.comment}"
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading restaurant data...</p>
      )}
    </div>
  );
};

export default RestaurantList;