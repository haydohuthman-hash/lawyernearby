export type Place = {
  label: string;
  lat: number;
  lon: number;
};

export type RouteResult = {
  coords: [number, number][]; // [lat, lon]
  km: number;
  mins: number;
  real: boolean; // true when road-routed, false when straight-line estimate
};

export const DEFAULT_FROM: Place = {
  label: "22 River Terrace, Brisbane QLD",
  lat: -27.4748,
  lon: 153.035,
};

export const DEFAULT_TO: Place = {
  label: "45 Ocean View Ave, Miami QLD",
  lat: -28.0708,
  lon: 153.4419,
};

export function shortenLabel(displayName: string) {
  return displayName.split(",").slice(0, 3).join(",").trim();
}

export async function searchAddress(query: string, signal?: AbortSignal): Promise<Place[]> {
  const url =
    "https://nominatim.openstreetmap.org/search?format=json&addressdetails=0&limit=5&countrycodes=au&q=" +
    encodeURIComponent(query);
  const res = await fetch(url, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`geocode failed: ${res.status}`);
  const data: { display_name: string; lat: string; lon: string }[] = await res.json();
  return data.map((d) => ({
    label: shortenLabel(d.display_name),
    lat: parseFloat(d.lat),
    lon: parseFloat(d.lon),
  }));
}

export function haversineKm(a: Place, b: Place) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const la1 = (a.lat * Math.PI) / 180;
  const la2 = (b.lat * Math.PI) / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function estimateRoute(a: Place, b: Place): RouteResult {
  const km = Math.round(haversineKm(a, b) * 1.25);
  const mins = Math.round((km / 72) * 60 + 10);
  return {
    coords: [
      [a.lat, a.lon],
      [b.lat, b.lon],
    ],
    km,
    mins,
    real: false,
  };
}

export async function fetchRoute(a: Place, b: Place, signal?: AbortSignal): Promise<RouteResult> {
  try {
    const url =
      `https://router.project-osrm.org/route/v1/driving/` +
      `${a.lon},${a.lat};${b.lon},${b.lat}?overview=full&geometries=geojson`;
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`route failed: ${res.status}`);
    const data = await res.json();
    const route = data?.routes?.[0];
    if (!route?.geometry?.coordinates?.length) throw new Error("no route");
    return {
      coords: route.geometry.coordinates.map(([lon, lat]: [number, number]) => [lat, lon]),
      km: Math.max(1, Math.round(route.distance / 1000)),
      mins: Math.max(1, Math.round(route.duration / 60)),
      real: true,
    };
  } catch (err) {
    if ((err as Error).name === "AbortError") throw err;
    return estimateRoute(a, b);
  }
}
