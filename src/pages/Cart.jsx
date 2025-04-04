import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Beispiel-Warenkorb-Daten
const initialCartItems = [
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

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigate = useNavigate();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Warenkorb</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Ihr Warenkorb ist leer</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Zu den Produkten
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center p-4 border-b last:border-b-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">{item.price} €</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Entfernen
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Gesamtsumme:</span>
              <span className="text-2xl font-bold">{total.toFixed(2)} €</span>
            </div>
            <button
              onClick={() => navigate('/order-summary')}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Zur Kasse
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart; 