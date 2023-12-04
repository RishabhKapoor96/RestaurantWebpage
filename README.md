# RestaurantWebpage
Home Page of a Restaurant website
# Restaurant Website Project

This project is a restaurant website built with ReactJS. It includes a frontend application that displays restaurant information fetched from a mock backend server.

Project Structure
The project structure is organized as follows:

src/: Contains the source code of the React application. It contains following folders - (components, images, services)
public/: Contains static assets and the HTML template.
README.md: Documentation file.
Running the Application
To start the development server and mock backend server:
Add this in your package.json => "start-json-server": "json-server --watch restaurantData.json --port 3001"

Then run this command in terminal:
npm run start-json-server

run:
npm start
This will launch the application at http://localhost:3000.

REST APIs
The application uses a mock backend server to simulate REST APIs. 

http://localhost:3001/restaurant: Fetches a list of restaurants.
