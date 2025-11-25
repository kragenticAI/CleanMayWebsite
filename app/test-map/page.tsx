"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/LeafletMapComponent"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="p-10">
      <LeafletMap latitude={30.7126}
        longitude={76.6914}
        title="Test Map"/>
    </div>
  );
}
