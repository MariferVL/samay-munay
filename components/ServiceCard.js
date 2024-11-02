import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-blanco-crema shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 mb-6">
      <Image
        src={service.image}
        alt={service.title}
        width={400} // Adjust width based on your design requirements
        height={250} // Adjust height based on your design requirements
        className="w-full h-40 object-cover"
        priority // Optional: Use priority for important images to improve LCP
      />
      <div className="p-6">
        <h3 className="text-ocre-claro text-xl font-merriweather mb-2">
          {service.title}
        </h3>
        <p className="text-gris-suave mb-4">{service.description}</p>
        <a
          href={service.link}
          className="inline-block bg-verde-suave text-white py-2 px-4 rounded hover:bg-ocre-claro transition duration-300"
        >
          Descubre Más
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
