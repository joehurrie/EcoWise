import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Shirt, Wine, MoreVertical, ChevronDown } from 'lucide-react';

const activities = [
    {
        title: "Organic Avocados",
        time: "Scanned yesterday",
        tags: ["Carbon: -0.5kg", "Water: -50L"],
        tagColors: ["bg-green-100 text-green-800", "bg-blue-100 text-blue-800"],
        icon: <Utensils />
    },
    {
        title: "Organic Cotton T-shirt",
        time: "Purchased 2 days ago",
        tags: ["Carbon: -2.1kg", "Ethical: +1"],
        tagColors: ["bg-green-100 text-green-800", "bg-purple-100 text-purple-800"],
        icon: <Shirt />
    },
    {
        title: "Glass Water Bottle",
        time: "Scanned 3 days ago",
        tags: ["Plastic: -5 items", "Waste: -1kg"],
        tagColors: ["bg-green-100 text-green-800", "bg-yellow-100 text-yellow-800"],
        icon: <Wine />
    }
]

export function RecentActivity() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Recent Activity</h2>
      <Card className="rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
            {activities.map((activity, index) => (
                <div key={index} className="p-6 border-l-4 border-accent">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <div className="bg-accent text-primary p-3 rounded-full mr-4">
                                {activity.icon}
                            </div>
                            <div>
                                <h3 className="font-bold">{activity.title}</h3>
                                <p className="text-sm text-gray-600">{activity.time}</p>
                                <div className="flex flex-wrap mt-2 gap-2">
                                    {activity.tags.map((tag, i) => (
                                        <span key={i} className={`text-xs px-2 py-1 rounded ${activity.tagColors[i]}`}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-accent hover:text-primary">
                            <MoreVertical />
                        </Button>
                    </div>
                </div>
            ))}
        </div>

        <div className="p-4 bg-gray-50 flex justify-center">
            <Button variant="link" className="text-accent font-medium flex items-center">
            View All Activity <ChevronDown className="ml-2" />
            </Button>
        </div>
      </Card>
    </section>
  );
}
