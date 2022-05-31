import React from "react";
import React, {PropTypes, Component} from 'react/addons';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import MyGreatPlace from './my_great_place';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 1.27714,
      lng: 103.84004
    },
    zoom: 15
    
  };

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
    

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={createMapOptions}>
          <MyGreatPlace lat={1.27714} lng={103.83004} text={'A'} />
{/*           
         <AnyReactComponent
          lat={1.27714}
          lng={103.83004}
          text="☕ Nylon Coffee"
        /> */}
        <AnyReactComponent
          lat={1.3128331674021738}
          lng={103.86110632643916}
          text="☕ Apartment Coffee"
        />
          <AnyReactComponent
          lat={1.3656806822389873}
          lng={103.86987143511345}
          text="☕ Chu and Co"
        />
         <AnyReactComponent
          lat={1.3119747944499036}
          lng={103.79685794417453}
          text="☕ Sunday Folks"
        />
           <AnyReactComponent
          lat={1.2862391217210336}
          lng={103.8034560399344}
          text="☕ Rookie's Coffee Shop "
        />
      </GoogleMapReact>
    </div>
  );
}