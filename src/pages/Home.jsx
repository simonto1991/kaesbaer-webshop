import { Link } from 'react-router-dom';

function Home() {
  // Beispiel-Produktkategorien
  const productCategories = [
    {
      id: 1,
      name: 'Käsespezialitäten',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Entdecken Sie unsere handverlesenen Käsespezialitäten aus verschiedenen Regionen.'
    },
    {
      id: 2,
      name: 'Milchprodukte',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Frische und cremige Milchprodukte von höchster Qualität.'
    },
    {
      id: 3,
      name: 'Bio-Produkte',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Nachhaltig produzierte Bio-Käse und Milchprodukte.'
    }
  ];

  // Beispiel-Markttermine
  const marketDates = [
    {
      id: 1,
      location: 'Waiblingen',
      date: 'So 06.04.',
      time: '11 – 17 Uhr',
      event: 'Ostermarkt'
    },
    {
      id: 2,
      location: 'Welzheim',
      date: 'So 06.04.',
      time: '11 – 17 Uhr',
      event: 'Frühlingsmarkt'
    },
    {
      id: 3,
      location: 'Gerstetten',
      date: 'So 13.04.',
      time: '11 – 17 Uhr',
      event: 'Brezgenmarkt'
    },
    {
      id: 4,
      location: 'Laichingen',
      date: 'Mo 21.04.',
      time: '9 – 17 Uhr',
      event: 'Ostermarkt'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Käsbär</h1>
            <p className="text-xl mb-8">Das Zuhause der Spezialitäten</p>
            <Link
              to="/products"
              className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors text-lg font-medium"
            >
              Entdecken Sie unsere Produkte
            </Link>
          </div>
        </div>
      </div>

      {/* Über uns Section */}
      <div className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Willkommen beim Käsbär</h2>
            <p className="text-lg text-gray-700 mb-8">
              Aus dem Molkereiproduktehändler mit einem Verkaufsfahrzeug wurde über die Jahre der Käsbär – Das Zuhause der Spezialitäten. 
              Im Jahr 1989 wurde aus Hobby ernst.
            </p>
            <p className="text-lg text-gray-700">
              Bei allen unseren Produkten legen wir nicht nur sehr hohen Wert auf die Qualität sondern auch auf den persönlichen Bezug zu unseren Produzenten/Lieferanten und deren Herangehensweise zum Produkt und Tier.
            </p>
          </div>
        </div>
      </div>

      {/* Produktkategorien */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Unsere Spezialitäten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map(category => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    to="/products"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Mehr erfahren →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Markttermine */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Wo Sie uns finden</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">In den nächsten Wochen steppt der Bär auf folgenden Märkten:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ort</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uhrzeit</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {marketDates.map(market => (
                        <tr key={market.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{market.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{market.location}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{market.event}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{market.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt Section */}
      <div className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Kontakt</h2>
            <p className="text-lg text-gray-700 mb-8">
              Sie haben Fragen, Wünsche oder Anregungen? Bitte nehmen Sie Kontakt mit uns auf, wir helfen Ihnen gerne weiter!
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Käsbär</h3>
                  <p className="text-gray-700">Seewiesenstr. 15</p>
                  <p className="text-gray-700">71334 Waiblingen</p>
                  <p className="text-gray-700">Telefon: +49 7151 368484</p>
                  <p className="text-gray-700">e-Mail: info@käsbär.com</p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Öffnungszeiten</h3>
                  <p className="text-gray-700">Montag - Freitag: 9:00 - 18:00</p>
                  <p className="text-gray-700">Samstag: 9:00 - 14:00</p>
                  <p className="text-gray-700">Sonntag: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 