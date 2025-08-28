import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Plus, Lightbulb } from 'lucide-react';

export function EcoGoals() {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-headline font-bold text-primary">Eco Goals & Progress</h2>
        <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 rounded-md flex items-center">
          <Plus className="mr-2" /> Add Goal
        </Button>
      </div>

      <Card className="p-6 rounded-lg shadow-md mb-6">
        <CardContent className="p-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold">Avoid 20 plastic items this month</h3>
              <p className="text-sm text-gray-600">Started 2 weeks ago</p>
            </div>
            <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">80%</span>
          </div>
          <Progress value={80} className="h-2.5" />
          <div className="mt-3 bg-blue-50 p-3 rounded-lg flex items-center">
            <Lightbulb className="text-accent mr-3 text-xl" />
            <p className="text-sm">You're 80% there—scan one more item to hit your goal!</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 rounded-lg shadow-md">
            <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                    <div>
                    <h3 className="font-bold">Reduce carbon footprint by 5kg</h3>
                    <p className="text-sm text-gray-600">Started 1 month ago</p>
                    </div>
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2.5" />
            </CardContent>
        </Card>

        <Card className="p-6 rounded-lg shadow-md">
            <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                    <div>
                    <h3 className="font-bold">Support 3 ethical brands</h3>
                    <p className="text-sm text-gray-600">Started 3 weeks ago</p>
                    </div>
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">33%</span>
                </div>
                <Progress value={33} className="h-2.5" />
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
