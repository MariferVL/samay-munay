import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-ocre-claro text-white h-16 flex items-center justify-between px-6 shadow-md">
      <h1 className="text-2xl font-merriweather">Samay Munay</h1>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-verde-suave transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-verde-suave transition-colors">
              Conóceme
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-verde-suave transition-colors">
              Descubre tu Esencia
            </Link>
          </li>
          <li>
            <Link href="/tarot" className="hover:text-verde-suave transition-colors">
              El Tarot y la Esencia
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-verde-suave transition-colors">
              Bitácora
            </Link>
          </li>
          <li>
            <Link href="/inspirations" className="hover:text-verde-suave transition-colors">
              Inspiraciones Audiovisuales
            </Link>
          </li>
          <li>
            <Link href="/quiz" className="hover:text-verde-suave transition-colors">
              Conócete
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-verde-suave transition-colors">
              Conectemos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
