import React from "react";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const MapComponent = () => {
    const center = {
        lat: 19.358928376779094, 
        lng: -99.16729686623003
    };
    return (
        <LoadScript googleMapsApiKey="AIzaSyDFjty2zEocmDWYXdUXjlQAtoUSJ5zxuBQ">
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={center}
                zoom={12}
            >
                <Marker position={center} />
            </GoogleMap>

        </LoadScript>
    );
};

export default MapComponent;