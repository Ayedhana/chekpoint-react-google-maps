import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
function App() {
  return (
    <div>
      <h1>google maps</h1>
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"tunisie"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          
        </InfoWindow>
      </Map>
    </div>
  );
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyAbPczCCw7Dp2LwTGxiImh2EP-hAXfDvao",
})(App);
