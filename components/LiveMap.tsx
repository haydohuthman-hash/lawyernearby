"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import type { Place, RouteResult } from "./geo";

function pinIcon(place: Place) {
  const parts = place.label.split(",");
  const title = parts[0].trim();
  const sub = parts.slice(1).join(",").trim();
  return L.divIcon({
    className: "",
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    html: `
      <div style="transform: translate(-50%, -100%); display:flex; flex-direction:column; align-items:center; width:max-content;">
        <div style="background:#fff; color:#0a0a0a; border-radius:8px; padding:6px 10px; font-size:11px; line-height:1.3; box-shadow:0 8px 24px rgba(0,0,0,0.5); max-width:200px; overflow:hidden;">
          <div style="font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${title}</div>
          ${sub ? `<div style="color:rgba(10,10,10,0.55); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${sub}</div>` : ""}
        </div>
        <svg width="26" height="26" viewBox="0 0 24 24" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6)); margin-top:2px;">
          <path d="M12 22s7-7.4 7-13a7 7 0 1 0-14 0c0 5.6 7 13 7 13Z" fill="#fff"/>
          <circle cx="12" cy="9" r="2.6" fill="#0a0a0a"/>
        </svg>
      </div>`,
  });
}

export default function LiveMap({
  from,
  to,
  route,
}: {
  from: Place;
  to: Place;
  route: RouteResult | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layersRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    map.attributionControl.setPrefix(false);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; CARTO',
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);
    L.control.zoom({ position: "bottomright" }).addTo(map);
    map.setView([-27.7, 153.2], 9);
    mapRef.current = map;
    layersRef.current = L.layerGroup().addTo(map);
    return () => {
      map.remove();
      mapRef.current = null;
      layersRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const layers = layersRef.current;
    if (!map || !layers) return;
    layers.clearLayers();

    L.marker([from.lat, from.lon], { icon: pinIcon(from), interactive: false }).addTo(layers);
    L.marker([to.lat, to.lon], { icon: pinIcon(to), interactive: false }).addTo(layers);

    const coords: [number, number][] = route?.coords ?? [
      [from.lat, from.lon],
      [to.lat, to.lon],
    ];

    L.polyline(coords, {
      color: "#ffffff",
      weight: 9,
      opacity: 0.12,
      lineCap: "round",
      interactive: false,
    }).addTo(layers);
    L.polyline(coords, {
      color: "#ffffff",
      weight: 3,
      opacity: 0.95,
      lineCap: "round",
      interactive: false,
      className: route?.real ? "" : "route-dashed",
    }).addTo(layers);
    L.polyline(coords, {
      color: "#ffffff",
      weight: 5,
      opacity: 0.9,
      lineCap: "round",
      interactive: false,
      className: "route-flow",
    }).addTo(layers);

    const bounds = L.latLngBounds(coords);
    map.fitBounds(bounds, { padding: [70, 70] });
  }, [from, to, route]);

  return <div ref={containerRef} className="h-full w-full" style={{ background: "#0c0f0d" }} />;
}
