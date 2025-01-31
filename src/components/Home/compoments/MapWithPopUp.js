"use client"
import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

const MapWithPopup = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      name: "Diamond Manor Apartment",
      address: "22-05 Astoria Blvd, Astoria",
      beds: 2,
      baths: 1,
      sqft: 500,
      coordinates: [-73.912, 40.774],
      image: "/Images/map.svg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Luxury Condo",
      address: "Floral Park, Queens",
      beds: 3,
      baths: 2,
      sqft: 750,
      coordinates: [-73.699, 40.723],
      image: "/Images/map.svg",
    },
  ];

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Map
        initialViewState={{
          longitude: -73.935,
          latitude: 40.730,
          zoom: 10,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      >
        {properties.map((property) => (
          <Marker
            key={property.id}
            longitude={property.coordinates[0]}
            latitude={property.coordinates[1]}
            onClick={() => setSelectedProperty(property)}
          >
            <img
              src="/icons/marker-icon.png"
              alt="Marker"
              style={{ width: "30px", cursor: "pointer" }}
            />
          </Marker>
        ))}

        {selectedProperty && (
          <Popup
            longitude={selectedProperty.coordinates[0]}
            latitude={selectedProperty.coordinates[1]}
            onClose={() => setSelectedProperty(null)}
            closeOnClick={false}
          >
            <div style={{ width: "200px" }}>
              <img
                src={selectedProperty.image}
                alt={selectedProperty.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h4>{selectedProperty.name}</h4>
              <p>{selectedProperty.address}</p>
              <p>Beds: {selectedProperty.beds} | Baths: {selectedProperty.baths}</p>
              <p>Sqft: {selectedProperty.sqft}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapWithPopup;
