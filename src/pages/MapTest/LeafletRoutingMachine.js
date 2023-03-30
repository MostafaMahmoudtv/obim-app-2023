import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = ( {lat , long}) => {


    
    
      const map = useMap();
      let destIcon = L.icon({
        iconSize: [40, 40],
        iconUrl: require("../../Assets/18-location-pin-lineal.gif"),
      });
      let secoo = L.icon({
        iconSize: [40, 40],
        iconUrl: require("../../Assets/icons8-map-pin-48.png"),
      });
      useEffect(() => {
       
        // map.on("loading", function (e) {
          L.marker([lat, long] , {icon: secoo}).addTo(map);
          L.marker([29.2999988 , 30.83333] , {icon: destIcon}).addTo(map);
          L.Routing.control({
            waypoints: [
              L.latLng(29.2999988 , 30.83333) ,
              L.latLng(lat , long ),
            ],
            lineOptions: {
              styles: [
                {
                  color: "blue",
                  weight: 4,
                  opacity: 0.7,
                },
              ],

            },
           createMarker: function() { return null; },
        
            show:false,
            collapsible: true,
            routeWhileDragging: false,
            geocoder: L.Control.Geocoder.nominatim(),
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
          })
            .addTo(map);
        // });
      }, []);
      return null;
    };
    
    



















































//   const map = useMap();
  
  
    
//     map.on("click", function (e) {
//       L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
//       L.Routing.control({
//         waypoints: [
//           L.latLng(29.2999988 , 30.83333),
//           L.latLng(e.latlng.lat, e.latlng.lng),
//         ],
//         lineOptions: {
//           styles: [
//             {
//               color: "blue",
//               weight: 4,
//               opacity: 0.7,
//             },
//           ],
//         },
//         routeWhileDragging: false,
//         addWaypoints: false,
//         draggableWaypoints: false,
//         geocoder: L.Control.Geocoder.nominatim()
//       }).addTo(map);
    
//     })
//   return null;



// const map =  useMap();

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© OpenStreetMap contributors'
// }).addTo(map);

// L.Routing.control({
//     waypoints: [
//         L.latLng(57.74, 11.94),
//         L.latLng(57.6792, 11.949)
//     ],
    
// }).addTo(map);







export default LeafletRoutingMachine;
