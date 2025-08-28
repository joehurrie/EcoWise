import { Button } from '@/components/ui/button';
import { Leaf, Recycle, HandHeart, UserCircle } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="bg-gradient-to-r from-primary to-[#1E4535] text-white p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-headline font-bold">EcoWise</h1>
            <p className="text-accent">Your sustainable journey companion</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 rounded-md flex items-center">
              <UserCircle className="mr-2" /> Profile
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-headline font-medium mb-2">
            Hi Joharie, your choices are shaping a cleaner future.
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-accent text-primary px-4 py-2 rounded-lg font-medium flex items-center">
              <Leaf className="mr-2 h-5 w-5" /> 3.2kg CO₂ saved
            </div>
            <div className="bg-accent text-primary px-4 py-2 rounded-lg font-medium flex items-center">
              <Recycle className="mr-2 h-5 w-5" /> 12 plastic items avoided
            </div>
            <div className="bg-accent text-primary px-4 py-2 rounded-lg font-medium flex items-center">
              <HandHeart className="mr-2 h-5 w-5" /> 1 ethical brand supported
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
