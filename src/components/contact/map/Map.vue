<template>
  <div id="maps-container">
    {{ map }}
  </div>
</template>

<script setup lang="ts">
import { Loader } from '@googlemaps/js-api-loader'
import { onMounted } from 'vue'

const loader = new Loader({
  apiKey: "AIzaSyBnDh-uY7i3zkrW6g5d0YTvxpJjVxRr7Sg",
  version: "weekly"
});

let map: any;

onMounted(async () => {
  const {AdvancedMarkerElement, PinElement} = await loader.importLibrary('marker');
  // 835 turnbull
  const position = { lat: 46.807631, lng: -71.224797 };

  const pin = new PinElement({
    background: 'black',
    borderColor: 'black',
    glyphColor: 'white'
  });

  map = await loader.importLibrary('maps').then(({Map}) => {
    const mapDiv = document.getElementById('maps-container') as HTMLElement;
    const map = new Map(mapDiv, { center: position, zoom: 17, disableDefaultUI: true, mapId: '92de6d49945fd2c2' });
    new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "chez juju",
      content:pin.element
    });
    return map;
  });
});
</script>