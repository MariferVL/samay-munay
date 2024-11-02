const Footer = () => {
    return (
      <footer className="bg-verde-suave text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-montserrat">
            &copy; {new Date().getFullYear()} Samay Munay. Todos los derechos reservados.
          </p>
          <div className="mt-4">
            <a
              href="mailto:contact@samaymunay.com"
              className="text-ocre-claro hover:text-blanco transition-colors"
            >
              contact@samaymunay.com
            </a>
          </div>
          <div className="mt-2">
            <p className="text-sm font-montserrat">
              Síguenos en:
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-ocre-claro hover:text-blanco transition-colors">Facebook</a>
              <a href="#" className="text-ocre-claro hover:text-blanco transition-colors">Instagram</a>
              <a href="#" className="text-ocre-claro hover:text-blanco transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  