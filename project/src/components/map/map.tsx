import { useEffect, useRef} from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { PointInMap, Offer } from '../../types/types';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {IconMapColour} from '../../const';

type MapProps = {
  city: PointInMap,
  offers: Offer[],
  activeOfferCard: Offer | null;
  currentOfferCard?: Offer | number;
}

const getOfferIcon = (iconUrl: string) => new Icon(
  {
    iconUrl,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
  });

const defaultIcon = getOfferIcon(IconMapColour.Default);
const activeIcon = getOfferIcon(IconMapColour.Active);

function Map(props: MapProps): JSX.Element {
  const {city, offers, activeOfferCard, currentOfferCard} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerGroup = new LayerGroup();

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const [lat, lng] = [offer.location.latitude, offer.location.longitude];
        const marker = new Marker({lat, lng});
        marker.setIcon(activeOfferCard !== null &&
         offer.id === activeOfferCard.id ? activeIcon : defaultIcon);
        marker.addTo(markerGroup);
      });
      markerGroup.addTo(map);
    }

    if (map && currentOfferCard) {
      offers.forEach((offer) => {
        const [lat, lng] = [offer.location.latitude, offer.location.longitude];
        const marker = new Marker({lat, lng});
        marker.setIcon(activeOfferCard !== null && offer.id === activeOfferCard.id ? activeIcon : defaultIcon);
        marker.addTo(markerGroup);
      });
      markerGroup.addTo(map);
    }


    return () => {
      markerGroup.remove();
    };
  });

  useEffect(() => {
    map?.setView(city);
  }, [city, map]);


  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
