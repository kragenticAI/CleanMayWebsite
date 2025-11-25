// "use client";

// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const icon = L.icon({
//   iconUrl: "/leaflet/marker-icon.png",
//   shadowUrl: "/leaflet/marker-shadow.png",
//   iconAnchor: [12, 41],
// });

// export default function MapInner({ latitude, longitude }: any) {
//   return (
//     <MapContainer
//       center={[latitude, longitude]}
//       zoom={13}
//       scrollWheelZoom={true}
//       className="w-full h-[350px] rounded-lg"
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker position={[latitude, longitude]} icon={icon} />
//     </MapContainer>
//   );
// }

"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapInner({ latitude, longitude, title }: any) {
  return (
    <div className="w-full h-[350px] rounded-lg overflow-hidden">
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Tooltip permanent direction="top">
            {title}
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}
