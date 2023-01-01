import { React, forwardRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import StyledMap from './style';

/**
 * Map component.
 *
 * @param {Object} props Component props.
 * @param {string} props.className Style class.
 * @param {Object} ref Forwarding ref from HOC.
 *
 * @return {Element}
 */
const MapComponent = forwardRef(({ className }, ref) => {
  const { REACT_APP_MAP_KEY } = process.env;
  return (
    <StyledMap>
      <MapContainer
        center={[32.03494677360762, 35.863119682260404]}
        zoom={10}
        className={className}
        ref={ref}
      >
        <TileLayer
          url={`https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=${REACT_APP_MAP_KEY}`}
        />
      </MapContainer>
    </StyledMap>
  );
});

MapComponent.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MapComponent;
