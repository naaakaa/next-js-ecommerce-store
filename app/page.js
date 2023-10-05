import Image from 'next/image';
import React from 'react';
import LocalStorage from './LocalStorage';

export default function Home() {
  return (
    <main>
      <LocalStorage />
      <h1>Products</h1>
      <div>
        <p>Cargobike</p>
        <Image src="/Cargobike.jpg" alt="Cargobike" width="100" height="100" />

        <p>Mountainbike</p>
        <Image
          src="/Mountainbike.jpg"
          alt="Mountainbike"
          width="100"
          height="100"
        />

        <p>Touringbike</p>
        <Image
          src="/Touringbike.jpg"
          alt="Touringbike"
          width="100"
          height="100"
        />

        <p>Bike with trailer</p>
        <Image
          src="/Trailer.jpg"
          alt="Bike with trailer"
          width="100"
          height="100"
        />
      </div>
    </main>
  );
}
