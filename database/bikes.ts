import 'server-only';

const bikes = [
  { id: 1, name: 'Boat', type: 'Cargobike' },
  { id: 2, name: 'Betty', type: 'Mountainbike' },
  { id: 3, name: 'Elena', type: 'Touringbike' },
  { id: 4, name: 'G-Bike', type: 'Trailer' },
];

export function getBikes() {
  return bikes;
}

//export function getBike(id: number) {
//  return bikes.find((bike) => bike.id === id);
//}
