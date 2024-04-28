import {
    FullscreenControl,
    GeolocationControl,
    Map,
    RoutePanel,
    YMaps,
    ZoomControl,
  } from "@pbe/react-yandex-maps";
  function YaMap() {

   
    
    return (
      <YMaps
        query={{
          lang: "ru_RU",
          apikey: "15f69216-f1ef-4c1d-a2d6-3aa136e3985e",
        }}
      >
        <Map
          width="100%"
          height="90vh"
          defaultState={{
            center:[40.39239, 71.777154],
            zoom: 10,
          }}
        >
          <FullscreenControl />
          <GeolocationControl options={{ float: "left" }} />
          <RoutePanel options={{ float: "right" }} />
          <ZoomControl options={{ float: "right" }} />

        </Map>
      </YMaps>
    );
  }
  
  export default YaMap;
  