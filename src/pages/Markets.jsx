import { useState } from 'react';

function Markets() {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Beispiel-Markttermine
  const upcomingMarkets = [
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
    },
    {
      id: 5,
      location: 'Neubulach',
      date: 'Mo 21.04.',
      time: '11 – 17 Uhr',
      event: 'Ostermarkt'
    },
    {
      id: 6,
      location: 'Balingen',
      date: 'Di 22.04.',
      time: '9 – 18 Uhr',
      event: 'Krämermarkt'
    }
  ];

  // Beispiel-Wochenmärkte
  const weeklyMarkets = [
    {
      id: 1,
      location: 'Pliezhausen',
      day: 'Freitag',
      time: '7 – 11:30 Uhr'
    },
    {
      id: 2,
      location: 'Renningen',
      day: 'Freitag',
      time: '13 – 17:30 Uhr'
    },
    {
      id: 3,
      location: 'Marbach a. N.',
      day: 'Samstag',
      time: '7 – 13 Uhr'
    },
    {
      id: 4,
      location: 'Wendlingen a. N.',
      day: 'Samstag',
      time: '7 – 12 Uhr'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Unsere Märkte</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'upcoming'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Kommende Märkte
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'weekly'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('weekly')}
          >
            Wochenmärkte
          </button>
        </div>

        {activeTab === 'upcoming' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">In den nächsten Wochen steppt der Bär auf folgenden Märkten:</h2>
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
                    {upcomingMarkets.map(market => (
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
        )}

        {activeTab === 'weekly' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Jede Woche auf folgenden Wochenmärkten:</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ort</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uhrzeit</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {weeklyMarkets.map(market => (
                      <tr key={market.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{market.day}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{market.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{market.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Markets; 