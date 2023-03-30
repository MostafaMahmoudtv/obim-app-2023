import React, { useEffect } from "react";
import L, { icon } from "leaflet";
import { useMap } from "react-leaflet";
const LeafletGeocoder = () => {

  let serchedsIcon = L.icon({
    iconSize: [40, 40],
    iconUrl: require("../../Assets/icons8-visit-48.png"),
  });

  const map = useMap();
  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng , {icon: serchedsIcon} ).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);
  return null;
};

export default LeafletGeocoder;