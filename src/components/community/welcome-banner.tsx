import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function WelcomeBanner() {
  return (
    <section>
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, Joharie!{' '}
              <span className="text-emerald-600">
                Ready to inspire change today?
              </span>
            </h1>
            <p className="text-gray-600 mt-2">
              12K members • 3.2M kg CO₂ saved • 1,200 ethical products
              submitted
            </p>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="mr-2 h-4 w-4" /> Share Your Tip
          </Button>
        </div>
      </div>
    </section>
  );
}
