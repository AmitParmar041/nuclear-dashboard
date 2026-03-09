import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { reactorData } from '../data';

const ReactorMap = () => {
  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-nuclear-blue">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {reactorData.map((reactor) => (
          <Marker key={reactor.id} position={reactor.location}>
            <Popup>
              <strong>{reactor.name}</strong><br />
              Type: {reactor.type}<br />
              Status: <span className={reactor.status === 'Operational' ? 'text-green-500' : 'text-red-500'}>{reactor.status}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ReactorMap;