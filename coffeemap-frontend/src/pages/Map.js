import { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import PropTypes from 'prop-types';
import axios from 'axios'
  
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}
 
export default function AddMap () {

  const defaultProps = {
    center: {
      lat: 1.3419337155970208,
      lng: 103.85414242579256
    },
    zoom: 13
    
  };
    
    const [cafes, setCafes] = useState([]);

 useEffect(() => {
            axios.get('/api/cafes', {
                withCredentials: true
            })
            .then((res) => {
                setCafes(res.data.cafes)
                console.log(res.data.cafes)
            })
            .catch((error) => console.log(error));
    }, [])

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // options={createMapOptions}
        >
       {cafes.map((cafes) => {
          <AnyReactComponent
          lat={Number(cafes.longtitude)}
          lng={Number(cafes.latitude)}
          text= {cafes.cafename}/>
       })}
        <AnyReactComponent
          lat={1.3128331674021738}
          lng={103.86110632643916}
          text="☕ Apartment Coffee"
        />
         <AnyReactComponent
          lat={1.2776939009509887}
          lng={103.83920364001963}
          text="☕ Handcraft Coffee "
        />
        <AnyReactComponent
          lat={1.3066306981197964}
          lng={103.90471672643913}
          text="☕ Homeground Coffee Roasters"
        />
          <AnyReactComponent
          lat={1.2862391217210336}
          lng={103.8034560399344}
          text="☕ Rookie's Coffee Shop"
        />
         <AnyReactComponent
          lat={1.3117891894090998}
          lng={103.86041602828344}
          text="☕ Chye Seng Huat Hardware"
        />
          <AnyReactComponent
          lat={1.3117891894090998}
          lng={103.86041602828344}
          text="☕ Lola's Cafe"
        />
         <AnyReactComponent
          lat={1.2770883748377164}
          lng={103.84000643993434}
          text="☕ Nylon Coffee"
        />
        <AnyReactComponent
          lat={1.3617746344847659}
          lng={103.88590245355108}
          text="☕ Chu and Co"
        />
         <AnyReactComponent
          lat={1.3119747944499036}
          lng={103.79685794417453}
          text="☕ Sunday Folks"
        />
        <AnyReactComponent
          lat={1.2964644991216177}
          lng={103.85534154190617}
          text="☕ Pinhole Coffee Bar"
        />
        <AnyReactComponent
          lat={1.3118833016982676}
          lng={103.86137891122212}
          text="☕ Lucid"
        />
        <AnyReactComponent
          lat={1.2962055005131932}
          lng={103.85369197588308}
          text="☕ Gather"
        />
        <AnyReactComponent
          lat={1.3534695202836147}
          lng={103.87806171641871}
          text="☕ Amber Ember"
        />
        <AnyReactComponent
          lat={1.3476789681264663}
          lng={103.8675760842352}
          text="☕ Wimbly Lu"
        /> 
        <AnyReactComponent
          lat={1.2880521738188562}
          lng={103.8471974149193}
          text="☕ Fangko + Coffee And Beer"
        /> 
        <AnyReactComponent
          lat={1.2870810387416303}
          lng={103.84727595355099}
          text="☕ Punch"
        /> 
      </GoogleMapReact>
      {cafes.map((cafes) => (
                  <div key={cafes.cafename} style={{display: `${cafes.display}`, width:'20%'}}>
                    <section>
                        {cafes.cafename}
                    </section>     
                  </div>
                ))}
    </div>
  );
}