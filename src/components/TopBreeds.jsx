const breeds = [
  { name: 'Local Deshi', type: 'Cow', desc: 'Traditional Bangladeshi breed, known for resilience' },
  { name: 'Australian Cross', type: 'Cow', desc: 'High yield crossbreed with excellent meat quality' },
  { name: 'Black Bengal', type: 'Goat', desc: 'Premium goat breed with tender meat' },
  { name: 'Jamunapari', type: 'Goat', desc: 'Large sized goat, perfect for family Qurbani' },
];

export default function TopBreeds() {
  return (
    <section className="py-12 sm:py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            🏆 Top Breeds
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Most popular and trusted breeds for Qurbani
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {breeds.map((breed, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-4">{breed.type === 'Cow' ? '🐄' : '🐐'}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">{breed.name}</h3>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded mb-3 inline-block">
                {breed.type}
              </span>
              <p className="text-gray-400 text-xs sm:text-sm">{breed.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}