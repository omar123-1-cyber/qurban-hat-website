import { FaCheckCircle } from 'react-icons/fa';

const tips = [
  'Check the animal\'s health and age before buying',
  'Ensure the animal has no visible injuries or diseases',
  'Verify the weight matches the seller\'s claim',
  'Ask for vaccination certificates if available',
  'Book early to get the best animals at fair prices',
  'Inspect the animal in daylight for best assessment',
];

export default function QurbaniTips() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🌙 Qurbani Tips
          </h2>
          <p className="text-gray-600">
            Essential guidelines for selecting your Qurbani animal
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-green-50 p-4 rounded-lg"
            >
              <FaCheckCircle className="text-primary text-xl mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}