import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../../database/bikes';

export const metadata = {
  title: 'Products page',
  description: 'Bike Shop',
};

export default function BikesPage() {
  const bikes = getBikes();
  return (
    <div>
      <h1>The bikes</h1>
      <div className="main">
        {bikes.map((bike) => {
          return (
            <div key={`bike-div-${bike.id}`}>
              <Link href={`/bikes/${bike.id}`}>{bike.name}</Link>
              <Image
                src={`/public/${bike.type}.jpg`}
                alt={bike.name}
                width={200}
                height={200}
              />
              <button>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
