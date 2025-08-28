import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TreePine, Droplets, Droplet, Zap } from 'lucide-react';

const stats = [
    {
        title: "CO₂ Saved",
        value: "3.2 kg",
        description: "Equivalent to planting 300 trees 🌳",
        progress: 75,
        icon: <TreePine className="text-xl" />,
    },
    {
        title: "Plastic Avoided",
        value: "12 items",
        description: "Enough to fill 3 bathtubs 🛁",
        progress: 60,
        icon: <Droplets className="text-xl" />,
    },
    {
        title: "Water Conserved",
        value: "250L",
        description: "Saved 50 jerry cans of clean water 🚰",
        progress: 45,
        icon: <Droplet className="text-xl" />,
    },
    {
        title: "Energy Saved",
        value: "120 kWh",
        description: "Powered 10 homes for a day ⚡",
        progress: 65,
        icon: <Zap className="text-xl" />,
    }
]

export function ImpactTracker() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Your Impact Tracker</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
            <Card key={stat.title} className="stat-card bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                        <div className="bg-primary text-white p-3 rounded-full mr-4">
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{stat.title}</h3>
                            <p className="text-accent font-medium">{stat.value}</p>
                        </div>
                    </div>
                    <p className="text-sm">{stat.description}</p>
                    <Progress value={stat.progress} className="mt-3 h-2.5" />
                </CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
}
