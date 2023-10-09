import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../../database/bikes';

export const metadata = {
  title: 'Products page',
  description: 'Bike Shop',
};

export default async function BikesPage() {
  const bikes = await getBikes();
  console.log('Check: ', bikes);

  return (
    <div>
      <h1>The bikes</h1>
      <div className="main">
        {bikes.map((bike) => {
          return (
            <div key={`bike-div-${bike.id}`}>
              <Link
                href={`/bikes/${bike.id}`}
                data-test-id="product-<product id>"
              >
                {bike.name}
                <br />
                <Image
                  src={`/${bike.type}.jpg`}
                  alt={bike.name}
                  width={200}
                  height={200}
                />
              </Link>
              <br />

              <button>Add to cart</button>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
