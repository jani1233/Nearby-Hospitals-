# 🚑 Emergency Hospital Finder

## 📌 Project Overview

Emergency Hospital Finder is a web-based healthcare assistance application designed to help users quickly identify and locate nearby hospitals during emergency situations. In critical moments, finding the nearest medical facility can be challenging and time-consuming. This project provides a simple, fast, and efficient solution by using real-time location services and interactive digital maps to guide users toward nearby hospitals.

The application uses the browser's **Geolocation API** to detect the user's current location and displays nearby hospitals on an interactive map using **Leaflet.js** and **OpenStreetMap**. Hospital information is collected dynamically through the **Overpass API**, allowing users to view available healthcare facilities around their location without requiring manual searching.

The system provides important details such as hospital names, locations, addresses, and approximate distance from the user's current position. Users can also access direct navigation through **Google Maps Directions**, helping them reach the selected hospital quickly and conveniently.

This project focuses on improving accessibility to emergency healthcare information by combining location-based services, mapping technology, and a user-friendly interface.

---

## 🎯 Objectives

- To develop an easy-to-use platform for finding nearby hospitals during emergencies.
- To reduce the time required to search for healthcare facilities.
- To provide accurate location-based hospital information.
- To integrate real-time maps and navigation services for better accessibility.
- To create a responsive application that can be used on different devices.

---

## ✨ Features

### 📍 Real-Time Location Detection
- Uses the browser's Geolocation API to identify the user's current position.
- Requests user permission securely before accessing location data.
- Provides error handling for denied permissions, unavailable locations, and network issues.

### 🏥 Nearby Hospital Search
- Automatically finds hospitals near the user's current location.
- Retrieves updated hospital information using OpenStreetMap data.
- Displays hospitals within a specific radius for quick access.

### 🗺️ Interactive Map Integration
- Uses Leaflet.js for creating an interactive and user-friendly map.
- Shows the user's current location with a marker.
- Displays nearby hospitals with individual map markers.
- Allows users to explore hospital locations visually.

### 📏 Distance Calculation
- Calculates the approximate distance between the user and nearby hospitals.
- Helps users choose the closest available medical facility.

### 🚗 Navigation Support
- Provides direct Google Maps navigation links.
- Allows users to get directions from their current location to the selected hospital.
- Helps reduce delays during emergency travel.

### 📱 Responsive User Interface
- Designed to work smoothly on desktops, tablets, and smartphones.
- Provides a simple and clean interface for users of all age groups.

---

## ⚙️ Technologies Used

### Frontend Technologies
- **HTML5** – Used for creating the structure of the application.
- **CSS3** – Used for designing a responsive and attractive user interface.
- **JavaScript (ES6)** – Used for application logic and dynamic functionality.

### APIs and Libraries
- **Leaflet.js** – Interactive map visualization library.
- **OpenStreetMap** – Open-source geographic data provider.
- **Overpass API** – Used to retrieve hospital information from OpenStreetMap.
- **Browser Geolocation API** – Used to obtain the user's current location.
- **Google Maps Directions API** – Used for navigation assistance.

---

## 🔄 Working Process

1. User opens the Emergency Hospital Finder web application.
2. User clicks on the **"Find Nearby Hospitals"** button.
3. The browser requests permission to access the user's location.
4. After permission is granted, the application detects the user's current coordinates.
5. The system sends a request to the Overpass API to collect nearby hospital information.
6. The received hospital data is displayed on an interactive map.
7. Users can view hospital details such as name, address, and distance.
8. Users can select any hospital and open Google Maps for navigation.

---

## 🏗️ System Workflow

User
|
|-- Allow Location Access
|
Geolocation API
|
|-- Get Current Coordinates
|
Overpass API + OpenStreetMap
|
|-- Retrieve Nearby Hospitals
|
Leaflet.js Map
|
|-- Display Hospital Locations
|
Google Maps Navigation
|
Reach Hospital Quickly

---

## 🌟 Advantages

- Provides quick access to nearby hospitals.
- Saves valuable time during emergency situations.
- Reduces manual searching for healthcare facilities.
- Uses free and open-source mapping technologies.
- Works without requiring installation of additional software.
- Provides a simple interface suitable for all users.

---

## 🔮 Future Enhancements

- Adding ambulance availability tracking.
- Including hospital emergency department availability.
- Adding doctor and specialist information.
- Providing hospital ratings and user reviews.
- Integrating emergency contact services.
- Developing a dedicated Android and iOS mobile application.
- Using AI-based recommendations for selecting suitable hospitals.

---

## 🎯 Purpose of the Project

The main purpose of Emergency Hospital Finder is to provide a reliable digital solution for quickly locating healthcare facilities during emergency situations. By combining real-time location tracking, interactive maps, and navigation support, this application helps users access medical services faster and more efficiently.

This project demonstrates the practical application of web technologies, location-based services, and API integration to solve real-world healthcare accessibility problems.
