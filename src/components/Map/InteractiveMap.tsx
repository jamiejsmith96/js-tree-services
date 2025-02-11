import React from 'react';
import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet';
import { Card, Text, Badge, Group, Stack, Title } from '@mantine/core';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React + Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const customIcon = new L.Icon({
  iconUrl: '/assets/map/tree-marker.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const InteractiveMap: React.FC = () => {
  const mainLocation = [51.2478, -0.7783]; // Aldershot coordinates
  const serviceAreas = [
    {
      id: 1,
      name: 'Aldershot',
      coordinates: [51.2478, -0.7783],
      radius: 5000,
      color: '#43A047',
    },
    {
      id: 2,
      name: 'Farnborough',
      coordinates: [51.2867, -0.7526],
      radius: 4000,
      color: '#66BB6A',
    },
    {
      id: 3,
      name: 'Fleet',
      coordinates: [51.2833, -0.8417],
      radius: 4000,
      color: '#81C784',
    },
    {
      id: 4,
      name: 'Farnham',
      coordinates: [51.2149, -0.7987],
      radius: 4000,
      color: '#A5D6A7',
    },
  ];

  return (
    <Card withBorder radius="md" padding={0}>
      <div style={{ height: '500px', position: 'relative' }}>
        <MapContainer
          center={mainLocation as L.LatLngExpression}
          zoom={12}
          style={{ height: '100%', width: '100%', zIndex: 1 }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Main Location Marker */}
          <Marker position={mainLocation as L.LatLngExpression} icon={customIcon}>
            <Popup>
              <Stack gap="xs">
                <Title order={6}>JS Tree Services</Title>
                <Text size="sm">123 Tree Street, Aldershot</Text>
                <Badge color="green">Main Office</Badge>
              </Stack>
            </Popup>
          </Marker>

          {/* Service Area Circles */}
          {serviceAreas.map((area) => (
            <Circle
              key={area.id}
              center={area.coordinates as L.LatLngExpression}
              radius={area.radius}
              pathOptions={{
                fillColor: area.color,
                fillOpacity: 0.2,
                color: area.color,
                weight: 1,
              }}
            >
              <Popup>
                <Stack gap="xs">
                  <Text fw={500}>{area.name}</Text>
                  <Text size="sm">Service coverage area</Text>
                  <Text size="xs" c="dimmed">
                    Radius: {(area.radius / 1000).toFixed(1)}km
                  </Text>
                </Stack>
              </Popup>
            </Circle>
          ))}
        </MapContainer>

        {/* Legend */}
        <Card
          withBorder
          padding="xs"
          radius="md"
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Stack gap="xs">
            <Text fw={500} size="sm">Service Areas</Text>
            {serviceAreas.map((area) => (
              <Group key={area.id} gap="xs">
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: area.color,
                  }}
                />
                <Text size="xs">{area.name}</Text>
              </Group>
            ))}
          </Stack>
        </Card>
      </div>
    </Card>
  );
};

export default InteractiveMap;