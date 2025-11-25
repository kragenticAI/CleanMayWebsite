"use client";

import dynamic from "next/dynamic";

const MapInner = dynamic(() => import("./MapInner"), {
  ssr: false,
  loading: () => <p>Loading Map...</p>,
});

export default function LeafletMap({ latitude, longitude }: any) {
  return (
    <div className="w-full h-[350px]">
      <MapInner latitude={latitude} longitude={longitude} />
    </div>
  );
}
