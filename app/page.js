import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main>
      <h1>Products</h1>
      <div>
        <p>Cargobike</p>
        <Image src="/cargo.jpg" alt="Cargobike" width="200" height="200" />

        <p>Mountainbike</p>
        <Image
          src="/mountain.jpg"
          alt="Mountainbike"
          width="200"
          height="200"
        />

        <p>Touringbike</p>
        <Image src="/touring.jpg" alt="Touringbike" width="200" height="200" />

        <p>Bike with trailer</p>
        <Image
          src="/trailer.jpg"
          alt="Bike with trailer"
          width="200"
          height="200"
        />
      </div>
    </main>
  );
}
