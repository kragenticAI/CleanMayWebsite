interface GoogleMapProps {
  lat: string | number;
  lng: string | number;
  zoom?: number;
}

export default function GoogleMap({ lat, lng, zoom = 12 }: GoogleMapProps) {
  // NO string functions, no conversions (safe)
  const url = `https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&center=${lat},${lng}&zoom=${zoom}&maptype=roadmap`;

  return (
    <div className="w-full max-w-3xl h-[400px] rounded-lg overflow-hidden border">
      <iframe
        src={url}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
