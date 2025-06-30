// src/composables/useGeolocation.ts
import { ref } from 'vue';

export function useGeolocation() {
	const position = ref<[number, number] | null>(null);

	const getLocation = () => {
		if (!navigator.geolocation) return;

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const { latitude, longitude } = pos.coords;
				position.value = [latitude, longitude];
			},
			(err) => {
				console.error('Geolocation error:', err);
			}
		);
	};

	return { position, getLocation };
}
