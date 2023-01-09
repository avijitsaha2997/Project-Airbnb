import React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';


function Map1({ searchResults }) {

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }));

    const center = getCenter(coordinates);

    return (
        <Map
            mapStyle="mapbox://styles/avijitsaha2997/clcp3ern8004514mkfp80j1sh"
            mapboxAccessToken={process.env.mapbox_key}
            initialViewState={{
                longitude: center.longitude,
                latitude: center.latitude,
                zoom: 3.5
            }}
            style={{ width: 600, height: 1000 }}
        >


        </Map>
    )
}

export default Map1