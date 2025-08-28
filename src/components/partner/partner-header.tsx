import { Button } from '@/components/ui/button';
import { LogIn, ChevronRight, Download } from 'lucide-react';

export function PartnerHeader() {
  return (
    <header className="bg-gradient-to-r from-primary to-[#1E4535] text-white p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-headline font-bold">
              EcoWise for Institutions
            </h1>
            <p className="text-accent">Turn your inventory into climate action</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 rounded-md flex items-center">
              <LogIn className="mr-2 h-4 w-4" /> Partner Login
            </Button>
          </div>
        </div>

        <div className="mb-8 py-8">
          <h2 className="text-4xl font-headline font-bold mb-4 max-w-3xl">
            Empower your operations with real-time sustainability insights
          </h2>
          <p className="text-xl mb-6 max-w-3xl">
            EcoWise helps retailers, NGOs, and institutions analyze stock,
            reduce waste, and align with climate goals.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button className="bg-accent text-primary px-6 py-3 rounded-md font-bold flex items-center hover:bg-accent/90">
              Request Demo <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-white text-primary px-6 py-3 rounded-md font-bold flex items-center border border-primary hover:bg-gray-100"
            >
              Download Institutional Brief <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
