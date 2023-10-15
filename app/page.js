import Image from 'next/image';
import React from 'react';
import LocalStorage from './LocalStorage';

export default function Home() {
  return (
    <div>
      <LocalStorage />
      <h1>Welcome to our Webshop!</h1>
      <p>
        We have used bicycles of different types and in different conditions.
      </p>
      <p>
        Some are ready to ride, some can be repaired with our help, some are
        rarities for collectors.
      </p>
      <h2>Here are some examples:</h2>

      <div class="row">
        <div>
          <p>Cargobike</p>
          <Image
            src="/Cargobike.jpg"
            alt="Cargobike"
            width="100"
            height="100"
          />
        </div>

        <div>
          <p>Mountainbike</p>
          <Image
            src="/Mountainbike.jpg"
            alt="Mountainbike"
            width="100"
            height="100"
          />
        </div>

        <div>
          <p>Touringbike</p>
          <Image
            src="/Touringbike.jpg"
            alt="Touringbike"
            width="100"
            height="100"
          />
        </div>

        <div>
          <p>Bike with trailer</p>
          <Image
            src="/Trailer.jpg"
            alt="Bike with trailer"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}
