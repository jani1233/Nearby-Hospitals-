let map = L.map('map').setView([20.5937, 78.9629], 5);

// OpenStreetMap Layer
L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap Contributors'
}).addTo(map);

// Variables
let userMarker;
let hospitalMarkers = [];

const button = document.getElementById("findHospital");
const status = document.getElementById("status");
const hospitalList = document.getElementById("hospitalList");

// Button Click
button.addEventListener("click", getLocation);

// Get User Location
function getLocation(){

    status.innerHTML = "Getting your location...";

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError,
            {
                enableHighAccuracy:true,
                timeout:10000
            }
        );

    }
    else{

        status.innerHTML =
        "Geolocation is not supported.";

    }

}

// User Location Success
function showPosition(position){

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    status.innerHTML =
    "Location Found Successfully";

    map.setView([lat,lon],15);

    if(userMarker){

        map.removeLayer(userMarker);

    }

    userMarker = L.marker([lat,lon])
    .addTo(map)
    .bindPopup(" You are here")
    .openPopup();

    findNearbyHospitals(lat,lon);

}

// Location Error
function showError(error){

    switch(error.code){

        case error.PERMISSION_DENIED:

            status.innerHTML =
            "Permission Denied.";

            break;

        case error.POSITION_UNAVAILABLE:

            status.innerHTML =
            "Location Unavailable.";

            break;

        case error.TIMEOUT:

            status.innerHTML =
            "Request Timed Out.";

            break;

        default:

            status.innerHTML =
            "Unknown Error.";

    }

}

async function findNearbyHospitals(lat, lon) {

    status.innerHTML = "Searching nearby hospitals...";

    // Remove old hospital markers
    hospitalMarkers.forEach(marker => map.removeLayer(marker));
    hospitalMarkers = [];

    hospitalList.innerHTML = "";

    // Search within 5 km
    const query = `
    [out:json];
    (
      node["amenity"="hospital"](around:5000,${lat},${lon});
      way["amenity"="hospital"](around:5000,${lat},${lon});
      relation["amenity"="hospital"](around:5000,${lat},${lon});
    );
    out center tags;
    `;

    try {

        const response = await fetch(
            "https://overpass-api.de/api/interpreter",
            {
                method: "POST",
                body: query
            }
        );

        const data = await response.json();

        if(data.elements.length === 0){

            status.innerHTML = "No hospitals found nearby.";

            hospitalList.innerHTML =
            "<h3>No nearby hospitals found.</h3>";

            return;
        }

        status.innerHTML =
        data.elements.length +
        " hospitals found.";

        data.elements.forEach(hospital => {

            let hospitalLat =
                hospital.lat ||
                hospital.center.lat;

            let hospitalLon =
                hospital.lon ||
                hospital.center.lon;

            let hospitalName =
                hospital.tags.name ||
                "Unnamed Hospital";

            let address =
                hospital.tags["addr:full"] ||
                hospital.tags["addr:street"] ||
                "Address not available";

            // Create marker
            const marker =
            L.marker([hospitalLat, hospitalLon])
            .addTo(map)
            .bindPopup(
                "<b>" + hospitalName + "</b><br>" +
                address
            );

            hospitalMarkers.push(marker);

            createHospitalCard(
                hospitalName,
                address,
                hospitalLat,
                hospitalLon
            );

        });

    }
    catch(error){

        console.log(error);

        status.innerHTML =
        "Unable to connect to Overpass API.";

    }

}


// Calculate distance in KM
function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (R * c).toFixed(2);

}

// Create Hospital Card
function createHospitalCard(name, address, lat, lon){

    const distance =
    calculateDistance(
        userMarker.getLatLng().lat,
        userMarker.getLatLng().lng,
        lat,
        lon
    );

    const card =
    document.createElement("div");

    card.className = "card";

    card.innerHTML =

    `
    <h3>${name}</h3>

    <p> ${address}</p>

    <p> Distance : ${distance} KM</p>

    <button onclick="navigateHospital(${lat},${lon})">
    ️ Get Directions
    </button>

    `;

    hospitalList.appendChild(card);

}

// Open Google Maps Directions
function navigateHospital(lat,lon){

    window.open(

    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`,

    "_blank"

    );

}

