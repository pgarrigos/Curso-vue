// src/apis/nominatim.ts
export async function searchAddress(query: string) {
	const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
		query
	)}`;
	const res = await fetch(url);
	return await res.json();
}
