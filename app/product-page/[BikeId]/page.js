import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBikeById } from '../../../database/bikes.js';

export async function generateMetadata({ params }) {
  const singleBike = await getBikeById(Number(params.bikeId));

  return {
    title: singleBike ? singleBike.name : '',
  };
}

export default async function BikePage(props) {
  const singleBike = await getBikeById(Number(props.params.bikeId));

  if (!singleBike) {
    return notFound();
  }
  return (
    <div>
      This is a single bike page
      <h1>{singleBike.name}</h1>
      <Image
        src={`/public/${singleBike.type}.jpg`}
        width={200}
        height={200}
        alt={singleBike.name}
      />
      this is a {singleBike.type} named {singleBike.name}
    </div>
  );
}
