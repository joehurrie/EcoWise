import { Scan, BarChart, Gem } from 'lucide-react';

const steps = [
  {
    icon: <Scan className="h-8 w-8" />,
    title: '1. Scan or Search',
    description: "Use your phone's camera to scan product barcodes or search manually in our database.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: '2. Get Ratings',
    description: 'View detailed sustainability scores based on emissions, packaging, sourcing and ethics.',
  },
  {
    icon: <Gem className="h-8 w-8" />,
    title: '3. Make Better Choices',
    description: 'Discover eco-friendly alternatives and track your personal impact over time.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-16 text-[#333333]">
          How EcoWise Lite Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="bg-[#15332A] text-white p-4 rounded-full mb-4">{step.icon}</div>
              <h3 className="font-headline text-xl font-bold mb-2 text-[#333333]">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
