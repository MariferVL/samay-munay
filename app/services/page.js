"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ServiceCard from '../../components/ServiceCard';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const servicesCollectionRef = collection(db, 'services');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getDocs(servicesCollectionRef);
        const servicesData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [servicesCollectionRef]);

  return (
    <div className="p-6">
      <h1 className="text-ocre-claro text-4xl font-merriweather mb-6">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="text-gris-suave">No hay servicios disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
