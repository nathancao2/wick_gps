import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css' //this one line literally imports the code in the <link> and the <script> tags. so that's how you're supposed to do it?
// check out maptiler; it would be fun to create my own tileset 

const center = [33.77690600305485, -118.36135411842548]

function Test() {
    return(
        <MapContainer 
            center={center} 
            zoom={13} 
            style={{width: "100vw", height: "100vh"}}
            scrollWheelZoom={false}>
        <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    )
}

export default Test;