import { useNavigate } from 'react-router-dom';

// Beispiel-Bestelldaten
const orderItems = [
  {
    id: 1,
    name: 'Produkt 1',
    price: 99.99,
    quantity: 2,
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    name: 'Produkt 2',
    price: 149.99,
    quantity: 1,
    image: 'https://via.placeholder.com/100'
  }
];

function OrderSummary() {
  const navigate = useNavigate();
  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier würde die Bestellabwicklung implementiert werden
    alert('Bestellung erfolgreich aufgegeben!');
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Bestellübersicht</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Bestellte Artikel</h2>
          {orderItems.map(item => (
            <div key={item.id} className="flex items-center mb-4 last:mb-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  {item.quantity} x {item.price} €
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{(item.price * item.quantity).toFixed(2)} €</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Lieferadresse</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Vorname</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Nachname</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Straße</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">PLZ</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Stadt</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Gesamtsumme:</span>
          <span className="text-2xl font-bold">{total.toFixed(2)} €</span>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Bestellung abschließen
        </button>
      </div>
    </div>
  );
}

export default OrderSummary; 