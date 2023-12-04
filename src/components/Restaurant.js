// src/components/Restaurant.js

import React from 'react';

const Restaurant = ({ restaurant }) => {
  const {
    name,
    location,
    chef,
    awards,
    ambiance,
    sustainability,
    events,
    online_presence,
    menu,
    reviews,
  } = restaurant;

  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <p>Location: {location.address}</p>
      <p>Chef: {chef.name}</p>

      <h3>Awards</h3>
      <ul>
        {awards.map((award, index) => (
          <li key={index}>
            {award.year} - {award.organization}: {award.award}
          </li>
        ))}
      </ul>

      <h3>Ambiance</h3>
      <p>{ambiance.description}</p>

      <h3>Sustainability Initiatives</h3>
      <ul>
        {sustainability.initiatives.map((initiative, index) => (
          <li key={index}>
            {initiative.name}: {initiative.description}
          </li>
        ))}
      </ul>

      <h3>Upcoming Events</h3>
      <ul>
        {events.upcoming_events.map((event, index) => (
          <li key={index}>
            {event.name} - Date: {event.date}
          </li>
        ))}
      </ul>

      <h3>Online Presence</h3>
      <p>Website: {online_presence.website}</p>
      <p>Facebook: {online_presence.social_media.facebook}</p>
      <p>Instagram: {online_presence.social_media.instagram}</p>
      <p>Twitter: {online_presence.social_media.twitter}</p>

      <h3>Menu</h3>
      {menu.categories.map((category, index) => (
        <div key={index}>
          <h4>{category.name}</h4>
          <ul>
            {category.items.map((item, index) => (
              <li key={index}>
                {item.name} - {item.description} - Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index}>
          <h4>{review.customer_name}</h4>
          <p>Rating: {review.rating}/5</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
