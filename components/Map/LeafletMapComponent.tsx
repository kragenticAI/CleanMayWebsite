"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconAnchor: [12, 41]
});

export default function LeafletMapComponent({ latitude, longitude }: any) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      className=" w-[350px] h-[350px] rounded-lg"
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={icon} />
    </MapContainer>
  );
}



