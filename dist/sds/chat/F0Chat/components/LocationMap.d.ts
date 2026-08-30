import { ReactNode } from 'react';
/**
 * Non-interactive vector map centered on a point. Kept in its own module so
 * maplibre-gl (heavy) lands in a lazy chunk, fetched only when a location
 * attachment actually renders — `ChatLocationAttachment` loads it via
 * `React.lazy`. Default export required by `lazy()`.
 */
declare const LocationMap: ({ latitude, longitude, }: {
    latitude: number;
    longitude: number;
}) => ReactNode;
export default LocationMap;
