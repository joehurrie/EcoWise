import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, Leaf } from 'lucide-react';

export function ImpactPreview() {
  return (
    <section className="py-16 px-6 bg-[#15332A] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Track Your Sustainability Impact</h2>
            <p className="text-lg mb-8">
              EcoWise helps you visualize the positive changes you're making through your shopping choices.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1E4538] rounded-xl p-4">
                <h3 className="font-bold text-[#A6E22E] mb-2">CO₂ Saved</h3>
                <p className="text-2xl font-bold">24.7 kg</p>
                <p className="text-sm text-gray-300">This month</p>
              </div>
              <div className="bg-[#1E4538] rounded-xl p-4">
                <h3 className="font-bold text-[#A6E22E] mb-2">Plastic Avoided</h3>
                <p className="text-2xl font-bold">143 items</p>
                <p className="text-sm text-gray-300">This month</p>
              </div>
            </div>
            <Button className="mt-8 bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition">
              View Full Dashboard
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline text-xl font-bold text-[#333333]">Your Sustainability Score</h3>
                <Badge className="bg-[#A6E22E] text-[#15332A] px-3 py-1 rounded-full text-sm font-bold">
                  Good
                </Badge>
              </div>
              <div
                className="impact-meter w-full h-4 rounded-full mb-6"
                style={{ '--percentage': '65%' } as React.CSSProperties}
              ></div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Food</div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Home</div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Personal</div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-[#333333] mb-3">Recent Achievements</h4>
                <div className="flex space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="bg-green-100 p-2 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
