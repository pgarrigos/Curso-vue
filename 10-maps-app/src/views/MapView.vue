<template>
  <div>
    <div id="map" style="height: 100vh"></div>
    <MapControls @goToLocation="flyToLocation" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, shallowRef } from "vue";
import L from "leaflet";
import MapControls from "@/components/MapControls.vue";

const map = shallowRef<L.Map>();

// Función para centrar el mapa en unas coordenadas y agregar un marcador
const flyToLocation = (coords: [number, number]) => {
  if (!map.value) return;

  map.value.flyTo(coords, 14, { animate: true });
  L.marker(coords).addTo(map.value);
};

// Inicializar el mapa
onMounted(() => {
  map.value = L.map("map").setView([40.4168, -3.7038], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map.value);

  L.marker([40.4168, -3.7038]).addTo(map.value).bindPopup("Madrid").openPopup();
});
</script>
