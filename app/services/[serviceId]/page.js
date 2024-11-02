"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase'; // Adjust the path according to your file structure
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

const ServiceDetailsPage = ({ params }) => {
  const { serviceId } = params; // Extract serviceId from params
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const serviceDoc = doc(db, 'services', serviceId);
      const serviceData = await getDoc(serviceDoc);
      if (serviceData.exists()) {
        setService({ ...serviceData.data(), id: serviceData.id });
      } else {
        console.log('No such document!');
      }
    };

    fetchService();
  }, [serviceId]);

  if (!service) {
    return <div>Loading...</div>; // Placeholder while loading service details
  }

  return (
    <div className="p-6">
      <h1 className="text-ocre-claro text-3xl font-merriweather mb-4">{service.title}</h1>
      <Image
        src={service.image} // Use the image URL from the service data
        alt={service.title}
        width={600} // Set appropriate width
        height={400} // Set appropriate height
        className="rounded-lg mb-4" // Style the image
      />
      <p className="text-gray-700 text-lg mb-4">{service.description}</p>
      <Link href="/services" className="text-ocre-claro underline">
        Back to Services
      </Link>
    </div>
  );
};

export default ServiceDetailsPage;
