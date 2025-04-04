function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Über Käsbär</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Der Bär</h2>
            <p className="text-lg text-gray-700 mb-6">
              Aus dem Molkereiproduktehändler mit einem Verkaufsfahrzeug wurde über die Jahre der Käsbär – Das Zuhause der Spezialitäten. 
              Im Jahr 1989 wurde aus Hobby ernst.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Heute ist der Käsbär ein etablierter Anbieter von hochwertigen Käse- und Milchprodukten in der Region. 
              Wir legen besonderen Wert auf Qualität, Nachhaltigkeit und den persönlichen Kontakt zu unseren Kunden.
            </p>
            <p className="text-lg text-gray-700">
              Unser Team besteht aus leidenschaftlichen Käse- und Milchproduktexperten, die ihr Wissen und ihre Erfahrung gerne mit Ihnen teilen.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Unsere Philosophie</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bei allen unseren Produkten legen wir nicht nur sehr hohen Wert auf die Qualität sondern auch auf den persönlichen Bezug zu unseren Produzenten/Lieferanten und deren Herangehensweise zum Produkt und Tier.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Wir unterstützen regionale Produzenten und achten auf nachhaltige Produktionsmethoden. 
              Durch den direkten Kontakt zu unseren Lieferanten können wir die Qualität unserer Produkte garantieren.
            </p>
            <p className="text-lg text-gray-700">
              Unser Ziel ist es, Ihnen die besten Käse- und Milchprodukte zu fairen Preisen anzubieten und Ihnen dabei ein unvergessliches Geschmackserlebnis zu bereiten.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Unser Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Team-Mitglied" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Max Mustermann</h3>
                <p className="text-gray-600">Gründer & Geschäftsführer</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Team-Mitglied" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Anna Schmidt</h3>
                <p className="text-gray-600">Käse-Sommelière</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 