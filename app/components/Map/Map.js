"use client";
import React from "react";

import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

export default function Map() {
  const apiKey = process.env.G_API_KEY;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!!isLoaded)
    return (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        zoom={10}
        center={{ lat: 43, lng: 80 }}
      />
    );
}
