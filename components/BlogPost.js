import React from 'react';

const BlogPost = ({ title, date, content }) => {
  return (
    <article className="bg-blanco-crema shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-ocre-claro text-2xl font-merriweather mb-4">
        {title}
      </h2>
      <p className="text-gris-suave text-sm mb-4">
        Publicado el {new Date(date).toLocaleDateString("es-ES", {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
      <div className="text-montserrat text-base text-gris-suave">
        <p>{content}</p>
      </div>
    </article>
  );
};

export default BlogPost;
