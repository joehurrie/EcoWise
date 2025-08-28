import { Card, CardContent } from '@/components/ui/card';

export function ImpactDashboardPreview() {
  return (
    <section className="mb-16 bg-primary text-white p-8 rounded-lg">
      <h2 className="text-2xl font-headline font-bold mb-6">
        Your Institutional Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <div className="text-3xl font-bold mb-2">12 tons</div>
          <p className="text-accent font-medium">CO₂ saved this quarter</p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <div className="text-3xl font-bold mb-2">3,000</div>
          <p className="text-accent font-medium">
            Plastic bottles equivalent avoided
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-lg">
          <div className="text-xl font-bold mb-2">
            EcoPost, M-KOPA, Orchid Valley
          </div>
          <p className="text-accent font-medium">
            Top ethical brands supported
          </p>
        </div>
      </div>
    </section>
  );
}
