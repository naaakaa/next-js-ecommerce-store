import 'server-only';

const bikes = [
  { id: 1, name: 'Boat', type: 'Cargobike' },
  { id: 2, name: 'Betty', type: 'Mountainbike' },
  { id: 3, name: 'Elena', type: 'Touringbike' },
  { id: 4, name: 'G-Bike', type: 'Bike with trailer' },
];

export function getBikes() {
  return bikes;
}

export function getBike(id) {
  return bikes.find((bike) => bike.id === id);
}
