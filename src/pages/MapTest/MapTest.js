import React from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./rootSlice";
import "leaflet/dist/leaflet.css";
// import L, { Icon } from "leaflet";
import './mapTest.css'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlinePhone} from 'react-icons/ai'
import {Ri24HoursFill} from 'react-icons/ri'
import {FaMapPin} from 'react-icons/fa'




import { MapContainer, Marker, Popup, TileLayer , useMap} from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L , { Icon } from "leaflet";
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";









const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const zoom = 12;

function ChangeView() {
  const coords = useSelector((state) => state.root.userData);

  const map = useMap();
  map.setView([coords.latitude, coords.longitude], zoom);

  return null;
}

const MapComponent = () => {
  const dispatch = useDispatch();
  const coord = useSelector((state) => state.root.userData);

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) dispatch(getUserData(location.coords));
      });
    }
  }, []);



  const useScript = url =>{
    useEffect(() => {
      const script = document.createElement('script')
      script.src=url
    script.async=true;
    document.body.appendChild(script)
    
      return () => {
        document.body.removeChild(script)
      }
    }, [url])
    }
    
  //      useScript('https://cdn.lordicon.com/fudrjiwc.js')

      //  const Desticon = new Icon({
      //   iconSize: [50, 50],
      //   iconUrl: require("../../Assets/18-location-pin-lineal.gif"),

      //  })
       const myLocation = new Icon({
        iconSize: [50, 50],
        iconUrl: require("../../Assets/icons8-map-pin-48.png"),

       })
      
       

  if (!coord) return null;


  let DefaultIcon = L.icon({
    iconUrl: require("../../Assets/icons8-map-pin-48.png"),
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  // L.Marker.prototype.options.icon = null;












  return (
<>

<div className="row m-0 mt-5" >
<div className="col-lg-6 col-md-12 col-sm-12">
<h1 style={{color:"blue"}}>اسرع طريق للوصول لعيادة OBIM</h1>
<div className="d-flex align-items-center my-5">
<IoLocationSharp size={40} className='ms-3'/>
<h3>الفيوم - العامرية - خلف السيتي سنتر </h3>
  </div>
<div className="d-flex align-items-center my-5">
<AiOutlinePhone size={40} className='ms-3'/>
<h3>+02001245939</h3>
  </div>
<div className="d-flex align-items-center my-5">
<Ri24HoursFill size={40} className='ms-3'/>
<h3>نعمل على مدار الساعة لخدمتكم</h3>
  </div>

</div>





<div className="col-lg-6 col-md-12 col-sm-12">




{/* <MapContainer
      center={[51.5, -0.09]}
      zoom={zoom}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coord.latitude, coord.longitude]} icon={myLocation}>
        <Popup>
انت هنا        </Popup>
      </Marker>
      <Marker position={[29.2999988 , 30.83333]} icon={Desticon}>
      <Popup>
عيادة OBIM       </Popup>
      </Marker>

      <ChangeView />
    </MapContainer> */}















<MapContainer center={[29.2999988 , 30.83333]}
      zoom={zoom}
      style={{ height: "100vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {/* <Marker position={[coord.latitude, coord.longitude]} icon={myLocation}>
        <Popup>
انت هنا        </Popup>
      </Marker> */}
      <ChangeView />
         <LeafletGeocoder />
        <LeafletRoutingMachine lat={coord.latitude}  long={coord.longitude} />
      </MapContainer>





















</div>






</div>



   

    </>
  );
};

export default MapComponent;
