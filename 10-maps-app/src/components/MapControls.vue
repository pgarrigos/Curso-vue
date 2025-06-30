<!-- src/components/MapControls.vue -->
<template>
  <div class="controls">
    <input v-model="searchQuery" @input="onSearch" placeholder="Buscar dirección..." />
    <ul v-if="results.length">
      <li v-for="place in results" :key="place.place_id" @click="goTo(place)">
        {{ place.display_name }}
      </li>
    </ul>
    <button @click="goToUserLocation">Mi ubicación</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGeolocation } from "@/composables/useGeolocation";
import { searchAddress } from "@/apis/nominatim";

const emit = defineEmits(["goToLocation"]);

const { getLocation, position } = useGeolocation();

const searchQuery = ref("");
const results = ref<any[]>([]);

const onSearch = async () => {
  if (searchQuery.value.length < 3) {
    results.value = [];
    return;
  }

  results.value = await searchAddress(searchQuery.value);
};

const goTo = (place: any) => {
  emit("goToLocation", [parseFloat(place.lat), parseFloat(place.lon)]);
  results.value = [];
  searchQuery.value = "";
};

const goToUserLocation = () => {
  getLocation();
  setTimeout(() => {
    if (position.value) emit("goToLocation", position.value);
  }, 500);
};
</script>

<style scoped>
.controls {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
input {
  width: 200px;
  margin-bottom: 0.5rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  cursor: pointer;
  padding: 0.3rem 0;
}
</style>
