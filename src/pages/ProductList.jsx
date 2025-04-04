import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Beispiel-Produktkategorien
  const categories = [
    { id: 'all', name: 'Alle Produkte' },
    { id: 'cheese', name: 'Käse' },
    { id: 'milk', name: 'Milchprodukte' },
    { id: 'bio', name: 'Bio-Produkte' }
  ];

  // Beispiel-Produkte
  const products = [
    {
      id: 1,
      name: 'Emmentaler',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Klassischer Emmentaler mit charakteristischen Löchern und mildem Geschmack.',
      category: 'cheese'
    },
    {
      id: 2,
      name: 'Gouda',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Holländischer Gouda mit cremiger Textur und leicht süßlichem Geschmack.',
      category: 'cheese'
    },
    {
      id: 3,
      name: 'Bio-Milch',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Frische Bio-Milch von glücklichen Kühen aus der Region.',
      category: 'milk'
    },
    {
      id: 4,
      name: 'Bio-Joghurt',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Cremiger Bio-Joghurt mit natürlichem Geschmack.',
      category: 'milk'
    },
    {
      id: 5,
      name: 'Bio-Käse',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Hochwertiger Bio-Käse aus kontrolliert biologischer Landwirtschaft.',
      category: 'bio'
    },
    {
      id: 6,
      name: 'Bio-Butter',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Cremige Bio-Butter mit vollem Geschmack.',
      category: 'bio'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-kaesbaer-blue mb-8 text-center">Unsere Produkte</h1>
      
      {/* Kategoriefilter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full font-bold transition-colors ${
              activeCategory === category.id
                ? 'bg-kaesbaer-blue text-white'
                : 'bg-kaesbaer-yellow text-kaesbaer-blue hover:bg-yellow-500'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Produktliste */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden border-2 border-kaesbaer-blue hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-kaesbaer-yellow text-kaesbaer-blue font-bold px-4 py-2 rounded-bl-lg">
                {product.price} €
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-kaesbaer-blue mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList; 