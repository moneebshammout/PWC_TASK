import { React, useState, useRef } from 'react';
import Title from 'Components/Title';
import Map from 'Components/Map';
import Button from 'Components/Button';
import TextField from 'Components/TextField';
import Spinner from 'Components/Spinner';
import { getMapCoordinates } from 'service/map.service';
import { MapWrapper, SearchContainer, TitleWrapper } from './style';

/**
 * Body component.
 *
 * @return {Element}
 */
export default function Body() {
  const textFieldRef = useRef('');
  const mapRef = useRef();
  const [fieldTheme, setFieldTheme] = useState('normal');
  const [isLoading, setIsLoading] = useState(false);

  const getCoordinates = async () => {
    if (textFieldRef.current.value === '') {
      setFieldTheme('error');
      return;
    }

    setIsLoading(true);
    const result = await getMapCoordinates(textFieldRef.current.value);
    if (result.length === 0) {
      setFieldTheme('error');
      setIsLoading(false);
      return;
    }

    mapRef.current.setView([result[0].latitude, result[0].longitude]);
    textFieldRef.current.value = '';
    if (fieldTheme === 'error') setFieldTheme('normal');
    setIsLoading(false);
  };

  return (
    <div>
      <TitleWrapper>
        <Title text="City finder" />
      </TitleWrapper>
      <MapWrapper>
        <Map className="map-container" ref={mapRef} />
        <SearchContainer>
          <TextField
            placeHolder="enter a city"
            ref={textFieldRef}
            theme={fieldTheme}
          />
          {isLoading ? (
            <Spinner />
          ) : (
            <Button text="Search" onClick={getCoordinates} />
          )}
        </SearchContainer>
      </MapWrapper>
    </div>
  );
}
