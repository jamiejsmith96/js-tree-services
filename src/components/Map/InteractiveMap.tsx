import React, { useRef } from 'react';
import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet';
import { Card, Text, Badge, Group, Stack, Title, Box } from '@mantine/core';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface ServiceArea {
  id: number;
  name: string;
  coordinates: [number, number];
  radius: number;
  color: string;
}

interface InteractiveMapProps {
  highlightedArea?: string | null;
}

export default function InteractiveMap({ highlightedArea }: InteractiveMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mainLocation: [number, number] = [51.2478, -0.7783]; // Aldershot coordinates

  const serviceAreas: ServiceArea[] = [
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
    <Box style={{ position: 'relative', height: '100%' }}>
      <MapContainer
        center={mainLocation}
        zoom={12}
        style={{ height: '100%', width: '100%', zIndex: 1, borderRadius: 'var(--mantine-radius-md)', overflow: 'hidden' }}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Main Location Marker */}
        <Marker position={mainLocation}>
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
            center={area.coordinates}
            radius={area.radius}
            pathOptions={{
              fillColor: area.color,
              fillOpacity: highlightedArea === area.name ? 0.4 : 0.2,
              color: area.color,
              weight: highlightedArea === area.name ? 2 : 1,
            }}
            eventHandlers={{
              click: () => {
                mapRef.current?.flyTo(area.coordinates, 13);
              }
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
                  opacity: highlightedArea === area.name ? 0.8 : 0.4,
                  transition: 'opacity 0.3s ease'
                }}
              />
              <Text size="xs">{area.name}</Text>
            </Group>
          ))}
        </Stack>
      </Card>
    </Box>
  );
}