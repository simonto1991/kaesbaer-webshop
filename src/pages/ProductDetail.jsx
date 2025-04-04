import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Beispiel-Produkte
  const products = [
    {
      id: 1,
      name: 'Emmentaler',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Klassischer Emmentaler mit charakteristischen Löchern und mildem Geschmack.',
      details: 'Unser Emmentaler wird nach traditioneller Rezeptur hergestellt und reift mindestens 4 Monate. Er zeichnet sich durch seine charakteristischen Löcher und seinen milden, leicht nussigen Geschmack aus. Perfekt für Käseplatten, zum Überbacken oder einfach zum Genießen.',
      origin: 'Schweiz',
      weight: '500g',
      category: 'cheese'
    },
    {
      id: 2,
      name: 'Gouda',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Holländischer Gouda mit cremiger Textur und leicht süßlichem Geschmack.',
      details: 'Unser Gouda ist ein klassischer holländischer Käse mit cremiger Textur und leicht süßlichem Geschmack. Er wird nach traditioneller Rezeptur hergestellt und reift mindestens 3 Monate. Perfekt für Käseplatten, zum Überbacken oder einfach zum Genießen.',
      origin: 'Niederlande',
      weight: '500g',
      category: 'cheese'
    },
    {
      id: 3,
      name: 'Bio-Milch',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Frische Bio-Milch von glücklichen Kühen aus der Region.',
      details: 'Unsere Bio-Milch stammt von glücklichen Kühen aus der Region. Sie wird nach strengen Bio-Richtlinien hergestellt und ist besonders cremig und geschmackvoll. Perfekt für Müsli, zum Kochen oder einfach zum Genießen.',
      origin: 'Deutschland',
      weight: '1L',
      category: 'milk'
    },
    {
      id: 4,
      name: 'Bio-Joghurt',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Cremiger Bio-Joghurt mit natürlichem Geschmack.',
      details: 'Unser Bio-Joghurt wird nach strengen Bio-Richtlinien hergestellt und ist besonders cremig und geschmackvoll. Er enthält keine künstlichen Zusatzstoffe und ist reich an wertvollen Bakterienkulturen. Perfekt für Müsli, zum Kochen oder einfach zum Genießen.',
      origin: 'Deutschland',
      weight: '500g',
      category: 'milk'
    },
    {
      id: 5,
      name: 'Bio-Käse',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Hochwertiger Bio-Käse aus kontrolliert biologischer Landwirtschaft.',
      details: 'Unser Bio-Käse wird nach strengen Bio-Richtlinien hergestellt und ist besonders geschmackvoll. Er stammt von glücklichen Kühen aus der Region und wird nach traditioneller Rezeptur hergestellt. Perfekt für Käseplatten, zum Überbacken oder einfach zum Genießen.',
      origin: 'Deutschland',
      weight: '500g',
      category: 'bio'
    },
    {
      id: 6,
      name: 'Bio-Butter',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Cremige Bio-Butter mit vollem Geschmack.',
      details: 'Unsere Bio-Butter wird nach strengen Bio-Richtlinien hergestellt und ist besonders cremig und geschmackvoll. Sie stammt von glücklichen Kühen aus der Region und wird nach traditioneller Rezeptur hergestellt. Perfekt für Brot, zum Kochen oder einfach zum Genießen.',
      origin: 'Deutschland',
      weight: '250g',
      category: 'bio'
    }
  ];
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-kaesbaer-blue mb-4">Produkt nicht gefunden</h1>
        <button
          onClick={() => navigate('/products')}
          className="bg-kaesbaer-yellow text-kaesbaer-blue px-4 py-2 rounded hover:bg-yellow-500 transition-colors font-bold"
        >
          Zurück zur Produktübersicht
        </button>
      </div>
    );
  }

  const addToCart = () => {
    // Hier würde die Warenkorb-Logik implementiert werden
    alert('Produkt wurde zum Warenkorb hinzugefügt!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-kaesbaer-blue">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="h-96 w-full object-cover md:w-96"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-kaesbaer-blue mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-kaesbaer-blue mb-4">{product.price} €</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-kaesbaer-blue">
              <h2 className="text-xl font-semibold text-kaesbaer-blue mb-2">Produktdetails</h2>
              <p className="text-gray-600 mb-4">{product.details}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-kaesbaer-blue font-medium">Herkunft:</p>
                  <p className="text-gray-600">{product.origin}</p>
                </div>
                <div>
                  <p className="text-kaesbaer-blue font-medium">Gewicht:</p>
                  <p className="text-gray-600">{product.weight}</p>
                </div>
              </div>
            </div>
            <button
              onClick={addToCart}
              className="bg-kaesbaer-yellow text-kaesbaer-blue px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
            >
              In den Warenkorb
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 