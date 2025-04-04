import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-kaesbaer-blue shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-kaesbaer-yellow hover:text-yellow-300 transition-colors">
            Käsbär
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-kaesbaer-yellow transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-kaesbaer-yellow transition-colors">
              Produkte
            </Link>
            <Link to="/markets" className="text-white hover:text-kaesbaer-yellow transition-colors">
              Märkte
            </Link>
            <Link to="/about" className="text-white hover:text-kaesbaer-yellow transition-colors">
              Über uns
            </Link>
            <Link to="/contact" className="text-white hover:text-kaesbaer-yellow transition-colors">
              Kontakt
            </Link>
            <Link to="/cart" className="text-white hover:text-kaesbaer-yellow transition-colors">
              Warenkorb
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 